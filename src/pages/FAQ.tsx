import React from 'react';

const FAQ: React.FC = () => {
  return (
        <div className="max-w-4xl mx-auto px-10 pt-4 pb-12">
            <h1 className="ont-secondary font-bold text-custom text-5xl text-center py-8 mb-4">Rules for working with the AI platform:</h1>
            <ol className="list-decimal flex flex-col gap-3 text-lg">
                <li>Obtain an account to access the system. To do this, send an email to <a href="mailto:med@comsys.kpi.ua">med@comsys.kpi.ua</a>, specifying your full name, organization, position, contact phone, and email address.</li>
                <li>After verifying the data, you will receive an email with your password.</li>
                <li>Log in to the system. To do this, click the "Login" button in the top right corner of the main page and enter your login and password.</li>
                <li>
                    Create or select an existing research:
                    <ol className="list-decimal ml-5">
                        <li>For creating a new research, select the "Research" menu item, choose the research type from the dropdown menu on the right side of the page, and click "Create". After creating the research, the system will redirect you to the editing page for the created research.</li>
                        Currently available research types are:
                            <ul className="list-disc ml-5">
                                <li>X-ray of the lungs</li>
                                <li>Diagnosis of skin diseases</li>
                            </ul>
                        Depending on the research type, you need to add corresponding files:
                        <ul className="list-disc ml-5">
                            <li>For "X-ray of the lungs" research, upload one lung X-ray image (file in png or jpg format). Optionally, you can upload text files with a description of the image.</li>
                            <li>For "Diagnosis of skin diseases" research, upload a skin photo (file in png or jpg format). Optionally, you can upload text files with a description.</li>
                        </ul>
                        <li>To upload a file, click the "Browse..." button and select the file from your disk. Then, select the file type from the dropdown list on the page and click "Save". After adding all files, click the "Finish editing" button. Adding new files to this research after editing is not possible.</li>
                    </ol>
                </li>
                <li>
                    After creating a new or selecting an existing research, the research information page will be displayed, which includes:
                    <ul className="list-disc ml-5">
                        <li>Research number</li>
                        <li>Type</li>
                        <li>Creation date</li>
                        <li>Description</li>
                        <li>List of attached files</li>
                        <li>List of requests for processing by SHI-assistants for this research</li>
                    </ul>
                    To submit a new processing request using SHI-assistants, select the appropriate SHI-assistant from the dropdown menu on the right side of the page and click "Send". A new request will be assigned a number, displayed in the list of requests, and queued for processing by the system. The request status will change in order: new - in progress - completed.
                </li>
                <li>View the processing results for a completed request. To do this, click on the request number in the requests list (left column). The request information window will be displayed.</li>
                <li>
                    The request information window displays:
                    <ul className="list-disc ml-5">
                        <li>Request number</li>
                        <li>Model (name of the SHI-assistant)</li>
                        <li>Request status</li>
                        <li>Creation date</li>
                        <li>Processing start date</li>
                        <li>Processing end date</li>
                        <li>Processing results</li>
                    </ul>
                    The output format of the processing results depends on the SHI-assistant. The processing results may include: "Probability" of the respective anomaly(-ies), Heatmap image file with probable anomaly feature locations, Image file with locations of probable anomalies, their names, and probabilities, Text file with names of anomalies, probabilities, and their locations, or a combination of the mentioned options. To view the file content with the result, click on its name.
                </li>
                <li>Log out of the system after completing your work. To do this, click on your full name in the top right corner of the page and click "Logout".</li>
            </ol>
        </div>
    );
}

export default FAQ;
