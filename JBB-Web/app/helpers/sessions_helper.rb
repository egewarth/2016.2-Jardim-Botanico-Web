module SessionsHelper
  def sign_in(user)
    session[:user_id] = user.id
    redirect_to user_show_path

  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def block_access
    if current_user.present?
      redirect_to home_path
    end
  end

  def logged_in?
    !current_user.nil?
  end

  def sign_out
    session.delete(:user_id)
    @current_user = nil
  end
end
