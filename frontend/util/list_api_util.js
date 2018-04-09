export const addList = list => (
  $.ajax({
    method: 'POST',
    url: '/api/lists',
    data: { list }
  })
);

export const deleteList = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/lists/${id}`,
  })
);

export const updateList = list => (
  $.ajax({
    method: 'PATCH',
    url: `/api/lists/${list.id}`,
    data: { list }
  })
);

export const fetchLists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/lists',
  })
);

export const fetchList = id => (
  $.ajax({
    method: 'GET',
    url: `/api/lists/${id}`,
  })
);
