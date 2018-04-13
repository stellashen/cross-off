export const addTagging = tagging => (
  $.ajax({
    method: 'POST',
    url: '/api/add_tags',
    data: { tagging }
  })
);

export const deleteTagging = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/add_tags/${id}`
  })
);

export const fetchTaggings = () => (
  $.ajax({
    method: 'GET',
    url: '/api/add_tags',
  })
);

export const fetchTagging = id => (
  $.ajax({
    method: 'GET',
    url: `/api/add_tags/${id}`,
  })
);
