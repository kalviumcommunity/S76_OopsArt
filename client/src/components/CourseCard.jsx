const CourseCard = ({ course }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{course.title}</h2>
        <p className="text-gray-600">{course.description}</p>
        <p className="text-sm text-blue-500">Category: {course.category}</p>
      </div>
    );
  };
  
  export default CourseCard;
  