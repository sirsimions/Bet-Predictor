class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :password_digest
end
