json.array!(@tips) do |tip|
  json.extract! tip, :id, :title, :description, :likes
  json.url tip_url(tip, format: :json)
end
