function downloadResume() {
    // Create a link element
    var link = document.createElement('a');
    
    // Set the href attribute to the path of the file to be downloaded
    link.href = '/resume'; // Update this to the correct path
    
    // Set the download attribute with the desired file name
    link.download = 'resume.pdf'; // Update this to the desired file name
    
    // Append the link to the document
    document.body.appendChild(link);
    
    // Trigger a click on the link to start the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
}