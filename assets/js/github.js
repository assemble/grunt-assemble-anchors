$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/assemble/repos?page=1&per_page=100',
    dataType: 'json',
    success: function (repos) {
      for (i in repos) {
        var repo = repos[i];
        $('#repos').append(
          '<div class="col-md-4 repo">' +
          '  <div class="panel panel-default">' +
          '    <div class="panel-heading">' +
          '      <h3 class="panel-title pull-left">' + repo.name + '</h3>' +
          '      <span class="language text-muted pull-right">' + repo.language + '</span>' +
          '    </div>' +
          '    <div class="panel-body">' +
                 repo.description +
          '    </div>' +
          '    <div class="panel-footer">' +
          '      <span class="badge pull-left">forks: ' + repo.forks + '</span>' +
          '      <span class="badge pull-left">watchers: ' + repo.watchers + '</span>' +
          '    </div>' +
          '  </div>' +
          '</div>'
        );
      }
      $('#repos-total').append('Total Repos: ' + repos.length);
    }
  });
});