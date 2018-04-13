export const addTag = tag => (
  $.ajax({
    method: 'POST',
    url: '/api/tag',
    data: { tag }
  })
);

export const fetchTags = () => (
  $.ajax({
    method: 'GET',
    url: '/api/tags',
  })
);

export const fetchTag = id => (
  $.ajax({
    method: 'GET',
    url: `/api/tag/${id}`,
  })
);
