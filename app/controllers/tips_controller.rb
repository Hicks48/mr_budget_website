class TipsController < ApplicationController
  before_action :set_tip, only: [:show, :edit, :update, :destroy]

  # GET /tips
  # GET /tips.json
  def index
    @tips = Tip.all
  end

  # GET /tips/1
  # GET /tips/1.json
  def show
  end

  # GET /tips/new
  def new
    @tip = Tip.new
  end

  # GET /tips/1/edit
  def edit
  end

  # POST /tips
  # POST /tips.json
  def create
    @tip = Tip.new(tip_params)

    respond_to do |format|
      if @tip.save
        format.html { redirect_to @tip, notice: 'Tip was successfully created.' }
        format.json { render :show, status: :created, location: @tip }
      else
        format.html { render :new }
        format.json { render json: @tip.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tips/1
  # PATCH/PUT /tips/1.json
  def update
    respond_to do |format|
      if @tip.update(tip_params)
        format.html { redirect_to @tip, notice: 'Tip was successfully updated.' }
        format.json { render :show, status: :ok, location: @tip }
      else
        format.html { render :edit }
        format.json { render json: @tip.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tips/1
  # DELETE /tips/1.json
  def destroy
    @tip.destroy
    respond_to do |format|
      format.html { redirect_to tips_url, notice: 'Tip was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def get_latest_tips
    @latest_tips = Tip.get_latest_tips({'amount' => params[:amount].to_i})
    render json:@latest_tips
  end

  def get_tip_of_the_day
    start_time = DateTime.new(Time.now.year, Time.now.month, Time.now.day, 0, 0, 0)
    end_time = DateTime.new(Time.now.year, Time.now.month, Time.now.day, 23, 59, 59)

    @tip_of_the_day = Tip.get_best_tips({'start_datetime' => start_time,
       'end_datetime' => end_time, 'amount' => params[:amount].to_i})
    render json:@tip_of_the_day
  end

  def get_tip_of_the_week
    start_time = DateTime.new(Time.now.year, Time.now.month, Time.now.day, 0, 0, 0)
    end_time = DateTime.new(Time.now.year, Time.now.month, Time.now.day, 23, 59, 59)

    @tip_of_the_week = Tip.get_best_tips({'start_datetime' => start_time,
      'end_datetime' => end_time, 'amount' => params[:amount].to_i})
      render json:@tip_of_the_week
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tip
      @tip = Tip.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def tip_params
      params.require(:tip).permit(:title, :description, :likes)
    end
end
