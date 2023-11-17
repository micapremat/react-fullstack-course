import Header from "./Header"
import Content from "./Content"

const Course = ({courses}) => {
    return(
        <div>
            {courses.map((course) => (
                <div key={course.id}>
                    <Header title={course.name}/>
                    <Content parts={course.parts}/>
                </div>
            ))}
        </div>
    )
}
export default Course