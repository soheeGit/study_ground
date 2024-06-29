import React, { useState } from 'react';
import './Test.css';
import Top1 from '../Top1';
import data from './data';

function Test() {
    const [selectedRows, setSelectedRows] = useState([]);

    const handleCheckboxChange = (event, title) => {
        if (event.target.checked) {
            setSelectedRows([...selectedRows, title]);
        } else {
            setSelectedRows(selectedRows.filter(rowTitle => rowTitle !== title));
        }
    };

    return (
        <div>
            <div className='Joinup-form-wrap'>
                <Top1 />
            </div>
            <div className='text-top'>
                <p>다음은 팀프로젝트 성격 유형에 대한 자료입니다.<br />자신이 가장 유사하다고 생각하는 유형을 골라주세요.</p>
            </div>
            <div className='Text-Column'>
                <div className='table-header'>
                    <div className='nickname'>별명</div>
                    <div className='personality'>특징</div>
                </div>
                <table>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.title} className={`row-${index} table-row`}>
                                <td style={{ textAlign: 'center', width: '150px' }}>{item.title}</td>
                                <td style={{ width: '600px' }}>{item.name}</td>
                                <td style={{ textAlign: 'center', width: '100px' }}>
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(item.title)}
                                        onChange={event => handleCheckboxChange(event, item.title)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='Test-button'>
                <button type='submit'>완료</button>
            </div>
        </div>
    );
}

export default Test;
