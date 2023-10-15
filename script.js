const byteSize = (str) => {
  // write your code here
	const blob = new Blob([str], { type: 'text/plain' });

  // Use the size property of the Blob object to get the byte size
  return blob.size; 
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
