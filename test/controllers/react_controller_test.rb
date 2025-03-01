require "test_helper"

class ReactControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get homepage_index_url
    assert_response :success
  end
end
