require "rails_helper"

RSpec.describe VisitationsController, type: :controller do
  before do
    @user = FactoryGirl.create(:user)
    sign_in(@user)
    @visitation = FactoryGirl.create(:visitation, user_id: @user.id, id: 5)
  end

  #CREATE
  describe "POST create" do  #Still dont test Mailer
  	it "should successfull create a visitation" do
  		post :create, :visitation => {  #PRECISO SABER O PORQUE ISSO ACONTECE
        :status => "Agendado",
        :visitants_amount => "50",
        :groups_age => "20",
        :has_guide => "true",
        :description => "Descrição da visitação",
        :visitants_paying => 200
			}
      expect(response).to have_http_status(:success)
      end
  end


  #EMPLOYEE CHANGE STATUS
  describe "Employee change visitation status" do #Dont test if doesn't work
    it "should successfull refuse a visitation" do
      get :refuse_visitation_employee, :id => @visitation.id
      @visitation.reload
      expect(@visitation.status).to eq("Recusado por funcionario")
    end

    it "should successfull cancel a visitation" do
      get :cancel_visitation_employee, :id => @visitation.id
      @visitation.reload
      expect(@visitation.status).to eq("Cancelado por funcionario")
    end

    it "should successfull accept a visitation" do
      get :accept_visitation_employee, :id => @visitation.id
      @visitation.reload
      expect(@visitation.status).to eq("Agendado")
    end
  end


  #DELETE
  describe "Destroy visitation" do #Dont test if doesn't work
    it "should delete a visitation" do
      expect{
          get :delete_visitation_employee, :id  => @visitation.id
      }.to change(Visitation,:count).by(-1)
    end
  end


  #INDEX
  describe "Index visitation" do  #Dont test PDF
    it "should show each visitation" do
      get :index, :id => @visitation.id
      expect(response).to have_http_status(:success)
      expect(response).to render_template("visitations/index")
    end
  end


                                                            # 100% COVERAGE
    #USER CHANGE STATUS
    describe "User change visitation status" do
    	it "should successfull cancel a visitation" do
    		get :cancel_visitation_user, :id => @visitation.id
        @visitation.reload
        expect(@visitation.status).to eq("Cancelado pelo usuario")
      end
    end


  #NEW
  describe "New visitation" do
    it "should GET a new visitation" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end


  #SHOW VISITS
  describe "Show visits" do
    it "should display all user's visits" do
      get :show
      expect(response).to have_http_status(:success)
      expect(response).to render_template("visitations/show")
    end

    it "should display just user's visitation" do
      get :show_user

      expect(response).to have_http_status(:success)
      expect(response).to render_template("visitations/show_user")
    end
  end


  #CALENDAR
  describe "Index calendar month" do
    it "should set visitations with status agendado and has guide true at the calendar" do
      get :index_calendar_month
      expect(response).to have_http_status(:success)
      expect(response).to render_template("visitations/index_calendar_month")
    end
  end
end
