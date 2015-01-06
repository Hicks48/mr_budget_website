json.array!(@sales) do |sale|
  json.extract! sale, :id, :description, :price, :location
  json.url sale_url(sale, format: :json)
end
