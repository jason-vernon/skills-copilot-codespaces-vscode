function skillsMember() {
    var member = {
        name: "Giovanni",
        age: 22,
        skills: ["HTML", "CSS", "JS", "React", "Node"]
    }

    var skills = member.skills;

    for (var i = 0; i < skills.length; i++) {
        console.log("[" + i + "] " + skills[i]);
    }
}