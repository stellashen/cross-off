require 'test_helper'

class Api::TagsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_tags_index_url
    assert_response :success
  end

  test "should get show" do
    get api_tags_show_url
    assert_response :success
  end

  test "should get create" do
    get api_tags_create_url
    assert_response :success
  end

  test "should get update" do
    get api_tags_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_tags_destroy_url
    assert_response :success
  end

end
