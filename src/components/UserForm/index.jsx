/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import paths from 'pages/Router/paths';
import { usersCleanUp } from 'state/actions/customers';
import { useChangeHandler } from 'utils/hooks';
import { validateEmail } from 'utils';
import './UserForm.scss';
import DatePicker from '../DatePicker';

const UserForm = ({ isEditing, isProfile, userData, action }) => {
  const { loading } = useSelector(
    state => ({
      loading: state.users.loading
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(usersCleanUp());
  }, [dispatch]);

  const [user, setUser] = useState(userData);

  const onChangeHandler = useChangeHandler(setUser);

  const onFileChangedHandler = event => {
    const file = event.target.files[0];
    setUser(prevState => ({ ...prevState, file, logoUrl: null }));
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    dispatch(
      action({ ...user, createdAt: user.createdAt, isEditing, isProfile })
    );
  };

  let emailInput = {
    modifier: null,
    message: { modifier: null, content: null }
  };

  const invalidEmail = user.email && !validateEmail(user.email);

  if (invalidEmail) {
    emailInput = {
      modifier: 'is-danger',
      message: {
        modifier: 'is-danger',
        content: 'Invalid E-mail'
      }
    };
  }

  const canSubmit =
    user.name && user.locationStreet1 && user.locationSuburb && user.locationState && user.locationPostcode && user.firstName && user.lastName && user.alternativeEmail && user.domain && user.createdAt && !invalidEmail;

  const imagePreviewUrl = !user.logoUrl
    ? user.file && URL.createObjectURL(user.file)
    : user.logoUrl;

  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="card tile is-child">
            <header className="card-header">
              <p className="card-header-title">
                <span className="icon">
                  <i className="mdi mdi-account-edit default" />
                </span>
                User Information
              </p>
            </header>
            <div className="card-content">
              <form onSubmit={onSubmitHandler}>
                {isEditing ? (
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">E-mail</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <input
                            type="text"
                            readOnly="readOnly"
                            className="input is-static"
                            value={user.email}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">E-mail</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <input
                            className={`input ${emailInput.modifier}`}
                            type="email"
                            required
                            name="email"
                            value={user.email}
                            onChange={onChangeHandler}
                          />
                        </div>
                        {emailInput.message.content && (
                          <p
                            className={`help is-${emailInput.message.modifier}`}
                          >
                            {emailInput.message.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Organisation Name</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          id="name"
                          className="input"
                          type="text"
                          required
                          name="name"
                          value={user.name}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Domain</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="domain"
                          required
                          value={user.domain}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">ABN</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="abn"
                          required
                          value={user.abn}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Street address</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="locationStreet1"
                          required
                          value={user.locationStreet1}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Street address 2</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="locationStreet2"
                          value={user.locationStreet2}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Suburb</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="locationSuburb"
                          required
                          value={user.locationSuburb}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">State</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="locationState"
                          required
                          value={user.locationState}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Postcode</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="locationPostcode"
                          required
                          value={user.locationPostcode}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">First Name</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          required
                          name="firstName"
                          value={user.firstName}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Last Name</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          required
                          name="lastName"
                          value={user.lastName}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Alternative E-mail</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          required
                          name="alternativeEmail"
                          value={user.alternativeEmail}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Phone</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="phone"
                          value={user.phone}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {!isProfile && (
                  <div className="field has-check is-horizontal">
                    <div className="field-label">
                      <label className="label">Admin</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="field">
                          <div className="control">
                            <label className="b-checkbox checkbox">
                              <input
                                type="checkbox"
                                name="isAdmin"
                                onChange={onChangeHandler}
                                checked={user.isAdmin}
                              />
                              <span className="check is-primary" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Created</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <DatePicker
                        name="createdAt"
                        date={new Date(user.createdAt)}
                        setState={setUser}
                      />
                    </div>
                  </div>
                </div>

                <hr />

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Logo</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="file has-name">
                        <label className="file-label">
                          <input
                            className="file-input"
                            type="file"
                            accept="image/*"
                            onChange={onFileChangedHandler}
                          />
                          <span className="file-cta">
                            <span className="file-icon">
                              <i className="fas fa-upload" />
                            </span>
                            <span className="file-label">
                              {user.file ? 'Pick another file' : 'Pick a file'}
                            </span>
                          </span>
                          <span className="file-name">
                            {user.file && user.file.name}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="field is-horizontal">
                  <div className="field-label" />
                  <div className="field-body">
                    <div className="field">
                      <div className="field is-grouped">
                        <div className="control">
                          <button
                            type="submit"
                            className={`button is-primary ${loading &&
                              'is-loading'}`}
                            disabled={!canSubmit}
                          >
                            <span>Submit</span>
                          </button>
                        </div>
                        {!isProfile && (
                          <Link to={paths.USERS} className="button">
                            Go Back
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="tile is-parent preview">
          <div className="card tile is-child">
            <header className="card-header">
              <p className="card-header-title">
                <span className="icon">
                  <i className="mdi mdi-account default" />
                </span>
                User Preview
              </p>
            </header>
            <div className="card-content">
              {imagePreviewUrl && (
                <>
                  <div className="is-user-avatar image has-max-width is-aligned-center">
                    <img
                      className="user-avatar"
                      src={imagePreviewUrl}
                      alt="User profile logo preview"
                    />
                  </div>
                  <hr />
                </>
              )}

              {!isEditing && (
                <div className="field">
                  <label className="label">E-mail</label>
                  <div className="control is-clearfix">
                    <input
                      type="text"
                      readOnly="readOnly"
                      className="input is-static"
                      value={user.email}
                    />
                  </div>
                </div>
              )}

              <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Organisation Name</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          id="name"
                          className="input"
                          type="text"
                          required
                          name="name"
                          value={user.name}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Domain</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="domain"
                          required
                          value={user.domain}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">ABN</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="abn"
                          required
                          value={user.abn}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Street address</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="locationStreet1"
                          required
                          value={user.locationStreet1}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Street address 2</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="locationStreet2"
                          value={user.locationStreet2}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Suburb</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="locationSuburb"
                          required
                          value={user.locationSuburb}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">State</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="locationState"
                          required
                          value={user.locationState}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Postcode</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="locationPostcode"
                          required
                          value={user.locationPostcode}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">First Name</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          required
                          name="firstName"
                          value={user.firstName}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Last Name</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          required
                          name="lastName"
                          value={user.lastName}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Alternative E-mail</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          required
                          name="alternativeEmail"
                          value={user.alternativeEmail}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Phone</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="phone"
                          value={user.phone}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>

              {!isProfile && (
                <div className="field">
                  <label className="label">Admin</label>
                  <div className="control is-clearfix">
                    {user.isAdmin ? (
                      <span className="icon">
                        <i className="mdi mdi-check" />
                      </span>
                    ) : (
                      <span className="icon">
                        <i className="mdi mdi-close" />
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="field">
                <label className="label">Created</label>
                <div className="control is-clearfix">
                  <input
                    type="text"
                    readOnly="readOnly"
                    className="input is-static"
                    value={user.createdAt}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UserForm.propTypes = {
  isEditing: PropTypes.bool,
  userData: PropTypes.shape({
    id: PropTypes.string,
    isAdmin: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    locationStreet1: PropTypes.string.isRequired,
    locationStreet2: PropTypes.string,
    locationSuburb: PropTypes.string.isRequired,
    locationState: PropTypes.string.isRequired,
    locationPostcode: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    alternativeEmail: PropTypes.string.isRequired,
    phone: PropTypes.string,
    domain: PropTypes.string.isRequired,
    logoUrl: PropTypes.string,
    tenant: PropTypes.string,
    createdAt: PropTypes.string.isRequired
  }),
  action: PropTypes.func.isRequired
};

export default UserForm;
