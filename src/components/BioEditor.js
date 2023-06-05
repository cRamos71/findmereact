import React, { useState, useEffect } from 'react';
import "./css/BioEditor.css"

const BioEditor = () => {
  const [bio, setBio] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const savedBio = sessionStorage.getItem('bio');
    if (savedBio) {
      setBio(savedBio);
    }
  }, []);

  const handleInputChange = (event) => {
    setBio(event.target.value);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    sessionStorage.setItem('bio', bio);
  };

  return (
    <div id='divxaxaax'>
        <div className='row'>
                {editing ? (
                <textarea
                    id='textar'
                value={bio}
                onChange={handleInputChange}
                className="form-control"
                />
            ) : (
                <div>
                {bio ? (
                    <p>{bio}</p>
                ) : (
                    <p>Empty ! Edit your bio below.</p>
                )}
                </div>
            )}
        </div>
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                {editing ? (
                    <button onClick={handleSaveClick} className="btn btn-primary" id='btnsave'>
                    Save
                    </button>
                ) : (
                    <button onClick={handleEditClick} className="btn btn-primary" id='btnedit'>
                    Edit Bio
                    </button>
                )}
            </div>
            <div className='col-sm-4'></div>
        </div>
    </div>
     
     
  );
};

export default BioEditor;