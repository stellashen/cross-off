@add_tags.each do |add_tag|
  json.set! add_tag.id do
    json.partial! 'add_tag', add_tag: add_tag
  end
end
