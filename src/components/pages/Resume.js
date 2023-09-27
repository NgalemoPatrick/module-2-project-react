import React from 'react'


const Resume = () => {
    // function to download my resume
    const handleDownload = () => {
        // let fetch the resume from the public folder
        fetch('resume.pdf').then(res => {
            res.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                // setting propertu value
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }
  return (
    <div className='resume-style'>
        
        <div className="resu-style">
            Click Below to Download my Resume
        </div>
        <div className="download" onClick={handleDownload}>
            Dowload
        </div>
    </div>
  )
}

export default Resume