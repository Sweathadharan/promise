const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function getAllCookies() {
  let output = '';
  for (let i = 0; i < cookies.length; i++) {
    output += cookies[i].name + ' ';
  }
  document.body.innerHTML = output;
  return output;
}

// Progression 2: using setTimeout() - use 1000 units for time parameter
setTimeout(() => {
  const allCookies = getAllCookies();
  console.log(allCookies);
}, 1000);

//Progression 3: Create a function to creat cookies and create an object of Promise.


// Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter

// Progression 5: handling errors and adding new cookie to the list
function create(newCookie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (newCookie) {
        cookies.push(newCookie);
        resolve();
      } else {
        reject('error');
      }
    }, 2000);
  });
}
create(newCookie)
  .then(() => {
     getAllCookies();
  })
  .catch(error => console.error(error));


// Progression 7: creating a new async function
async function Cookie() {
  try{
  await create(newCookie);
  getAllCookies();
  }
  catch{
    console.log(error);
  }
}

// calling the new async function

Cookie();
