class User < ActiveRecord::Base
  has_many :tips
  has_secure_password

  def self.get_public_info(id)
    puts 'ijjj'
    puts id
    user = User.find_by_id(id)

    if(user.nil?)
      return {"id" => nil, "username" => nil,
        "karma" => nil, "avatar" => nil,
        "created_at" => nil, "updated_at" => nil}
    end

    return {"id" => user.id, "username" => user.username,
       "karma" => user.karma, "avatar" => user.avatar,
        "created_at" => user.created_at, "updated_at" => user.updated_at}
  end
end
