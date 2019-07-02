const input = document.querySelector('#input');
const areaJson = document.querySelector('#areaJson');
const hangulPattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
const tableTemplate = ({ login, location, bio, url }) => {
  return `
        <table class="table">
            <thead>
            <tr>
                <th scope="col">User</th>
                <th scope="col">Location</th>
                <th scope="col">Bio</th>
                <th scope="col">Github</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>${login}</td>
                <td>${location}</td>
                <td>${bio}</td>
                <td>${url}</td>
            </tr>
            </tbody>
        </table> 
    `;
};

const renderTable = function(res) {
  areaJson.innerHTML = tableTemplate(res);
};

const emptyData = function() {
  const hangulCheck = hangulPattern.test(input.value);
  if (hangulCheck)
    return (areaJson.innerHTML =
      '<div class="arerNot">한글프로필은 존재하지 않습니다. <br />영문이나 숫자, 영문 + 숫자 조합으로 다시 입력하시기 바랍니다.</div>');
  areaJson.innerHTML = '<div class="arerNot">User Profile not found.</div>';
};

const handleApiRequest = function(e) {
  if (e.keyCode !== 13) {
    return;
  }

  const userName = e.target.value;
  fetch('https://api.github.com/users/' + userName)
    .then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          console.log(typeof res);
          renderTable(res);
        });
      } else {
        emptyData();
        //console.log(1);
      }
    })
    .catch((err) => console.error(err));
};

input.addEventListener('keyup', handleApiRequest);
