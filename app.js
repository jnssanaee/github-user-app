const input = document.querySelector("#input");
const areaJson = document.querySelector("#areaJson");
const tableTemplate = ({login, location, bio, url}) => {
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
    `
}

const renderTable = function(res){
    areaJson.innerHTML = tableTemplate(res)
}

const emptyData = function(){
    areaJson.innerHTML = '<div class="arerNot">응답되는 주소가 없습니다.</div>';
}

const handleApiRequest = function(e){
    if(e.keyCode !== 13) {
        return
    }

    const userName = e.target.value;
    fetch('https://api.github.com/users/' + userName)
        .then((res) => {
            if (res.ok) {
                res.json().then((res) => {
                    console.log(typeof res)
                    renderTable(res)
                });
            } else {
              emptyData();
            }
        })
        .catch(err => console.error(err));
}

input.addEventListener("keyup", handleApiRequest);