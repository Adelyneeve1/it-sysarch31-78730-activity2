import profilePic from './assets/profilepic.jpg/'

function Student(){
   return(
    <div className="student">
        <img className='student-image'src={profilePic} alt="profile picture"></img>
        <h2 className='name'>Adelyne Eve Gipgano</h2>
        <p className='email'>adelyneeve1@gmail.com</p>  
    </div>

   );
}function Content() {
    const students = [
      { id:1, name: 'Adelyne Eve Gipgano', email: 'adelyneeve1@gmail.com', image: profilePic },
      { id:2,name: 'Adelyne Eve Gipgano', email: 'adelyneeve1@gmail.com', image: profilePic },
      { id:3,name: 'Adelyne Eve Gipgano', email: 'adelyneeve1@gmail.com', image: profilePic },
      { id:4, name: 'Adelyne Eve Gipgano', email: 'adelyneeve1@gmail.com', image: profilePic },
      { id:5,name: 'Adelyne Eve Gipgano', email: 'adelyneeve1@gmail.com', image: profilePic },
    ];
  
    return (
      <div className="content">
        {students.map((student, index) => (
          <Student key={index} name={student.name} email={student.email} image={student.image} />
        ))}
      </div>
    );
  }
  
  export default Content;