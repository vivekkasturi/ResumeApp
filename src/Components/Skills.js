///Skills page is completed
import MyContext from "../MyContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export function Skills() {
    const { skills, setSkills, inputBoxq, setInputBoxq, skillRating, setSkillRating } = useContext(MyContext);
    const [onChangeSkills, setOnChangeSkills] = useState("");

    const updatedSkills = () => {
        if (onChangeSkills.trim() !== "") {
            const newSkills = { name: onChangeSkills, rating: skillRating }

            setSkills([...skills, newSkills]);
            alert("skills are added");
            setOnChangeSkills(" ");
        } else {
            alert("please enter skills, it should not be in blank")
        }
    };

    const deleteSkills = (e) => {

        const filteredSkills = skills.filter((skill, index1) => {
            if (index1 != e) {
                return true;
            }
        });

        setSkills(filteredSkills);
    }


    return (
        <>
            <h3>Add your Skills</h3>
            <label htmlFor="skillname">Skill</label>
            <input
                type="text"
                name="skillname"
                id="skillname"
                placeholder="Add Skills"
                value={onChangeSkills}
                onChange={(e) => { setOnChangeSkills(e.target.value) }}
            />
            <label htmlFor="skillratings">Rating(1-5)</label>
            <input
                type="range"
                name="skillratings"
                id="skillratings"
                min="1"
                max="5"
                value={skillRating}
                onChange={(e) => setSkillRating(e.target.value)}
            />

            <p><ul>{skills.map((skill, index) => {

                return (

                    <>


                        <li key={index}>{skill.name} {skill.rating}<button onClick={() => deleteSkills(index)}>Delete</button></li>
                    </>



                )

            })}</ul></p>

            <button onClick={updatedSkills}>Add</button>
            <Link to="/workExperience"><button type="submit"  >
                Back
            </button></Link>
            <Link to="/personaldetails2"><button type="submit"  >
                Next
            </button></Link>
            

        </>


    )

}
