# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150106145156) do

  create_table "sales", force: true do |t|
    t.text     "description"
    t.decimal  "price"
    t.text     "location"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tags", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tips", force: true do |t|
    t.text     "title"
    t.text     "description"
    t.integer  "likes"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  create_table "users", force: true do |t|
    t.text     "username"
    t.decimal  "karma"
    t.text     "avatar"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_digest"
    t.string   "email"
  end

  create_table "users_tips", id: false, force: true do |t|
    t.integer "assembly_id"
    t.integer "part_id"
  end

  add_index "users_tips", ["assembly_id"], name: "index_users_tips_on_assembly_id"
  add_index "users_tips", ["part_id"], name: "index_users_tips_on_part_id"

end
