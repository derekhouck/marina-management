require "rails_helper"

RSpec.describe DocksController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/docks").to route_to("docks#index")
    end

    it "routes to #show" do
      expect(get: "/docks/1").to route_to("docks#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/docks").to route_to("docks#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/docks/1").to route_to("docks#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/docks/1").to route_to("docks#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/docks/1").to route_to("docks#destroy", id: "1")
    end
  end
end
