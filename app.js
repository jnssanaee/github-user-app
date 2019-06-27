const input = document.querySelector("#input");
const areaJson = document.querySelector("#areaJson");
const tableTemplate = (data) => {
    const login = data.login
    const location = data.location
    const bio = data.bio
    const url = data.url
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

//const renderTable = (data) => areaJson.innerHTML = tableTemplate(data)
const renderTable = function(data){
    areaJson.innerHTML = tableTemplate(data)
}

// const emptyData = (error) => areaJson.innerHTML = '<div class="arerNot">응답되는 주소가 없습니다.</div>';
const emptyData = function(error){
    alert(1);
    areaJson.innerHTML = '<div class="arerNot">응답되는 주소가 없습니다.</div>';
}

const handleApiRequest = function(e){
    if(e.keyCode !== 13) {
        return
    }

    const userName = e.target.value;
    fetch('https://api.github.com/users/' + userName)
        .then(response => response.json())
        .then(data => renderTable(data))
        //.then(data => console.log(data))
        //.catch(error => emptyData(error))
        .catch(function(error){
            alert(1);
        })
}

input.addEventListener("keyup", handleApiRequest);