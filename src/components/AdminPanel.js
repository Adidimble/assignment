// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Table, Modal, Form } from 'react-bootstrap';
// import { Formik, Field, Form as FormikForm } from 'formik';
// import * as Yup from 'yup';

// const profileSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   description: Yup.string().required('Description is required'),
//   longitude: Yup.number().required('Longitude is required'),
//   latitude: Yup.number().required('Latitude is required'),
// });

// const AdminPanel = () => {
//   const [profiles, setProfiles] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [currentProfile, setCurrentProfile] = useState(null);

//   useEffect(() => {
//     axios.get('/api/profiles')
//       .then((response) => setProfiles(response.data))
//       .catch((error) => console.error('Error fetching profiles:', error));
//   }, []);

//   const handleEdit = (profile) => {
//     setCurrentProfile(profile);
//     setShowModal(true);
//   };

//   const handleDelete = (profileId) => {
//     axios.delete(`/api/profiles/${profileId}`)
//       .then(() => setProfiles(profiles.filter(p => p.id !== profileId)))
//       .catch((error) => console.error('Error deleting profile:', error));
//   };

//   const handleSubmit = (values, { setSubmitting }) => {
//     if (currentProfile) {
//       axios.put(`/api/profiles/${currentProfile.id}`, values)
//         .then(() => {
//           setProfiles(profiles.map(p => p.id === currentProfile.id ? values : p));
//           setShowModal(false);
//         })
//         .catch((error) => console.error('Error updating profile:', error))
//         .finally(() => setSubmitting(false));
//     } else {
//       axios.post('/api/profiles', values)
//         .then((response) => {
//           setProfiles([...profiles, response.data]);
//           setShowModal(false);
//         })
//         .catch((error) => console.error('Error adding profile:', error))
//         .finally(() => setSubmitting(false));
//     }
//   };

//   return (
//     <div>
//       <Button variant="primary" onClick={() => {
//         setCurrentProfile(null);
//         setShowModal(true);
//       }}>
//         Add New Profile
//       </Button>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {profiles.map((profile) => (
//             <tr key={profile.id}>
//               <td>{profile.name}</td>
//               <td>{profile.description}</td>
//               <td>
//                 <Button variant="warning" onClick={() => handleEdit(profile)}>
//                   Edit
//                 </Button>
//                 <Button
//                   variant="danger"
//                   onClick={() => handleDelete(profile.id)}
//                 >
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>{currentProfile ? 'Edit Profile' : 'Add Profile'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Formik
//             initialValues={{
//               name: currentProfile ? currentProfile.name : '',
//               description: currentProfile ? currentProfile.description : '',
//               longitude: currentProfile ? currentProfile.longitude : 0,
//               latitude: currentProfile ? currentProfile.latitude : 0,
//             }}
//             validationSchema={profileSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ errors, touched, isSubmitting }) => (
//               <FormikForm>
//                 <Form.Group>
//                   <Form.Label>Name</Form.Label>
//                   <Field
//                     name="name"
//                     className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`}
//                   />
//                   {errors.name && touched.name ? (
//                     <div className="invalid-feedback">{errors.name}</div>
//                   ) : null}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Description</Form.Label>
//                   <Field
//                     name="description"
//                     as="textarea"
//                     className={`form-control ${errors.description && touched.description ? 'is-invalid' : ''}`}
//                   />
//                   {errors.description && touched.description ? (
//                     <div className="invalid-feedback">{errors.description}</div>
//                   ) : null}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Longitude</Form.Label>
//                   <Field
//                     name="longitude"
//                     type="number"
//                     className={`form-control ${errors.longitude && touched.longitude ? 'is-invalid' : ''}`}
//                   />
//                   {errors.longitude && touched.longitude ? (
//                     <div className="invalid-feedback">{errors.longitude}</div>
//                   ) : null}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Latitude</Form.Label>
//                   <Field
//                     name="latitude"
//                     type="number"
//                     className={`form-control ${errors.latitude && touched.latitude ? 'is-invalid' : ''}`}
//                   />
//                   {errors.latitude && touched.latitude ? (
//                     <div class "invalid-feedback">{errors.latitude}</div>
//                   ) : null}
//                 </Form.Group>
//                 <Button
//                   type="submit"
//                   variant="primary"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? 'Saving...' : 'Submit'}
//                 </Button>
//               </FormikForm>
//             )}
//           </Formik>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default AdminPanel;
