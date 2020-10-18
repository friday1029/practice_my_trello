class ListsController < ApplicationController
  before_action :set_list, only: [:show, :edit, :update, :destroy, :move]
  before_action :authenticate_user!

  def index
    @lists = current_user.lists.all
  end

  def move
    @list.insert_at(list_params[:position].to_i)
    render 'show.json'
  end

  # GET /lists/new

  def create
    @list = current_user.lists.new(list_params)

    respond_to do |format|
      if @list.save
        ActionCable.server.broadcast("board", { commit: 'ADD_LIST', payload: render_to_string(:show, format: :json)})
        #ActionCable.server.boardcast("chat_#{room}", { key1: value1, key2: value2})
        format.html { redirect_to @list, notice: 'List was successfully created.' }
        format.json { render :show, status: :created, location: @list }
      else
        format.html { render :new }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @list.update(list_params)
        format.html { redirect_to @list, notice: 'List was successfully updated.' }
        format.json { render :show, status: :ok, location: @list }
      else
        format.html { render :edit }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @list.destroy
    ActionCable.server.broadcast("board", {commit: 'REMOVE_LIST', payload: render_to_string(:show, format: :json)})
    respond_to do |format|
      format.html { redirect_to lists_url, notice: 'List was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list
      @list = List.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def list_params
      params.require(:list).permit(:name, :user_id, :position)
    end
end
