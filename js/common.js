$.ajax({
  url: 'https://sparkling_water_test01.microcms.io/api/v1/info',
  type: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': '0b74e5c9-9a5c-4ad6-a56b-b350d5baa7a7',
  },
})
  .done(function (data) {
    console.log(data.contents);
    let list_body = '';
    $.each(data.contents, function () {
      console.log(this.date);
      let list_date = '';
      let list_ttl = '';
      let dateT = this.date.slice(0, 10).replace(/-/g, '/'); // 日付整形
      list_date += '<p class="date">' + dateT + '</p>';
      list_ttl += '<p class="title">' + this.title + '</p>';
      list_body += '<li class="infoItem">' + list_date + list_ttl + '</li>';
    });
    $('#js-infoBody').html(list_body);
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    console.log('fail...');
  });
