import React, { useState } from 'react';
import Sidebar from '../../sidebar/Sidebar1';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLocation } from 'react-router-dom';
import './Submission.css';

const Submission = ({ onSubmit = () => {} }) => {
    const location = useLocation();
    const { title: initialTitle } = location.state || { title: '' };

    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState('');
    const [fileName, setFileName] = useState('');
    const [fileSelected, setFileSelected] = useState(false);
    const [submissionMethod, setSubmissionMethod] = useState('온라인');
    const [postingDate, setPostingDate] = useState('');
    const [deadline, setDeadline] = useState('');
    const [lateSubmission, setLateSubmission] = useState('불허');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event, editor) => {
        const data = editor.getData();
        setContent(data);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file.name);
        setFileSelected(true);
    };

    const handlePostingDateChange = (event) => {
        setPostingDate(event.target.value);
    };

    const handleDeadlineChange = (event) => {
        setDeadline(event.target.value);
    };

    const handleLateSubmissionChange = (event) => {
        setLateSubmission(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            title,
            content,
            fileName,
            submitted: true,
            date: new Date().toLocaleDateString('en-US'),
            submissionMethod,
            postingDate,
            deadline,
            lateSubmission
        };
        onSubmit(newPost);
    };

    return (
        <div>
            <Sidebar />
            <div className='Submission-table'>
                <div className='task'>Task</div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">제목 </label>
                        <div className='title-line'>|</div>
                        <input
                            id="title"
                            className="no-border-input"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="submissionMethod">제출방식</label>
                        <div className='submissionMethod-line'>|</div>
                        <span>온라인</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postingDate">게시일</label>
                        <div className='postingDate-line'>|</div>
                        <input type="date" id="postingDate" value={postingDate} onChange={handlePostingDateChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="deadline">마감일</label>
                        <div className='postingDate-line'>|</div>
                        <input type="date" id="deadline" value={deadline} onChange={handleDeadlineChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lateSubmission">지각제출</label>
                        <div className='submissionMethod-line'>|</div>
                        <span>불허</span>
                    </div>
                    <div className="submission-content-container">
                        <CKEditor
                            editor={ClassicEditor}
                            config={{
                                placeholder: '내용을 입력해주세요.',
                                height: '250px' // Set the desired height here
                            }}
                            onChange={handleContentChange}
                            className="submission-content"
                        />
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="file">첨부파일 |  </label>
                        <input type="file" id="file" onChange={handleFileChange} />
                    </div><br/>
                    <button className='mission-button' type="submit">등록하기</button>
                </form>
            </div>
        </div>
    );
};

export default Submission;
