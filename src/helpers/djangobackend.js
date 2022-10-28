import {
    toastErrorNotify,
    toastSuccessNotify,
    toastWarnNotify,
} from "./ToastNotify";


export const addBlogDjango=async function(blog, navigate){

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

console.log(blog);

var raw = JSON.stringify({
  "category": blog.category,
  "title": blog.title,
  "content": blog.content,
  "image_url": blog.image_url,
  "status": blog.status,
  "user_id": blog.user_id
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://nurbaki.pythonanywhere.com/blogapp/posts/", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log('addBlog fonk:', result);
    if (result.id) {
      toastSuccessNotify("Blog successfully added!");
      navigate("/");
    }else {
      if (result.category[0]) {
        toastWarnNotify("Category: " + result.category[0]);
      }
      if (result.status[0]) {
        toastWarnNotify("Status: " + result.status[0]);
      }
      if (result.title[0]) {
        toastWarnNotify("Title: " + result.title[0]);
      }
      if (result.content[0]) {
        toastWarnNotify("Content: " + result.content[0]);
      }
      if (result.image_url[0]) {
        toastWarnNotify("Image URL: " + result.image_url[0]);
      }
    }
    
  })
}


export const updateBlogDjango=async function(blog, navigate, id){
  
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

console.log(blog);

var raw = JSON.stringify({
  "category": blog.category,
  "title": blog.title,
  "content": blog.content,
  "image_url": blog.image_url,
  "status": blog.status,
  "user_id": blog.user_id
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`https://nurbaki.pythonanywhere.com/posts/${id}/`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log('addBlog fonk:', result);
    if (result.id) {
      toastSuccessNotify("Blog successfully updated!");
      navigate("/");
      // navigate("/details/" + id);
    }else {
      toastErrorNotify("There is an problem. Please fill out form completely");
    }
    
  })
  
  .catch(error => {
    console.log('error', error)
    toastErrorNotify(error.message);
  });

  
}



export const deleteBlogDjango=async function(id, navigate){

var myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");


var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://nurbaki.pythonanywhere.com/blogapp/posts/${id}/`, requestOptions)
  .then(response => response.text())
  .then(result => {
      toastSuccessNotify("Blog successfully deleted!");
      navigate("/");
    
  })
  .catch(error => console.log('error', error));

}






// ****************User islemleri*******************


  //********/register

export const registerDjangoUser = async (username, firstName, lastName, email, password, navigate) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "csrftoken=x5gAZ8jBMK2I97vaGh9SV5374JyiQUya; sessionid=ec863wba8ylyz0ut4y7yne9k8ui3vtq0");

  var raw = JSON.stringify({
    "username": username,
    "email": email,
    "first_name": firstName,
    "last_name": lastName,
    "password": password,
    "password2": password
  });
  var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://nurbaki.pythonanywhere.com/users/register/", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log('registered', result);
    navigate("/login")
    toastSuccessNotify("Registered successfully!");
  })

  .catch(error => {
    console.log('error', error)
    toastErrorNotify(error.message);
  });
}

// ************LOGIN*************

  export const loginDjangoUser = async (email, password, navigate, setCurrentUser) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=x5gAZ8jBMK2I97vaGh9SV5374JyiQUya; sessionid=ec863wba8ylyz0ut4y7yne9k8ui3vtq0");
    
    var raw = JSON.stringify({
      "email": email,
      "password": password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://nurbaki.pythonanywhere.com/users/auth/login/", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.key) {
          console.log('Success:', result);
          navigate("/");
          toastSuccessNotify("Login successfully!");
        setCurrentUser(result);
        sessionStorage.setItem("user", JSON.stringify(result));          
        }else {
          console.log(result);
          toastErrorNotify(result.non_field_errors[0]);
          toastWarnNotify("Please type correct E-mail and Password");
        }
      })
  };


 export const logoutDjangoUser = async (navigate, setCurrentUser) => {

  var myHeaders = new Headers();
  myHeaders.append("Cookie", "csrftoken=x5gAZ8jBMK2I97vaGh9SV5374JyiQUya; sessionid=ec863wba8ylyz0ut4y7yne9k8ui3vtq0");

  var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
  };

  fetch("https://nurbaki.pythonanywhere.com/users/auth/logout/", requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log('logout', result);
    navigate("/")
    toastSuccessNotify("Logged out successfully!");
    setCurrentUser(false);
    sessionStorage.clear();
  })
  .catch(error => {
    console.log('error', error)
    toastErrorNotify(error.message);
  });

  }



