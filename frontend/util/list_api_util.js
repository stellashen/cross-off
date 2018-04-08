export const addList = list => (
  $.ajax({
    method: 'POST',
    url: '/api/lists',
    data: { list }
  })
);
