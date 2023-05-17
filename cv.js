class CurriculumVitae {
    constructor(name, summary, email) {
      this.name = name;
      this.summary = summary;
      this.email = email;
      this.education = [];
      this.experience = [];
      this.skills = [];
    }
  
    addEducation(institution, degree, field, startDate, endDate) {
      this.education.push({
        institution: institution,
        degree: degree,
        field: field,
        startDate: startDate,
        endDate: endDate,
      });
    }
  
    addExperience(company, position, startDate, endDate, description) {
      this.experience.push({
        company: company,
        position: position,
        startDate: startDate,
        endDate: endDate,
        description: description,
      });
    }
  
    addSkill(skill, proficiency) {
      this.skills.push({
        skill: skill,
      });
    }
  
    generateHTML() {
        let html = `
          <h2>${this.name}</h2>
          <p>${this.email}</p>
        `;
      
        if (this.summary) {
          html += `<p>${this.summary}</p>`;
        }
      
        html += `
          <section>
            <h3>Education</h3>
        `;
      
        if (this.education.length === 0) {
          html += `<p>None</p>`;
        } else {
          html += `<ul>`;
      
          this.education.forEach((edu) => {
            html += `
              <li>
                <h4>${edu.degree} in ${edu.field}</h4>
                <p>${edu.institution} (${edu.startDate} - ${edu.endDate})</p>
              </li>
            `;
          });
      
          html += `</ul>`;
        }
      
        html += `
          </section>
          <section>
            <h3>Experience</h3>
        `;
      
        if (this.experience.length === 0) {
          html += `<p>None</p>`;
        } else {
          html += `<ul>`;
      
          this.experience.forEach((exp) => {
            html += `
              <li>
                <h4>${exp.position}</h4>
                <p>${exp.company} (${exp.startDate} - ${exp.endDate})</p>
                <p>${exp.description}</p>
              </li>
            `;
          });
      
          html += `</ul>`;
        }
      
        html += `
          </section>
          <section>
            <h3>Skills</h3>
        `;
      
        if (this.skills.length === 0) {
          html += `<p>None</p>`;
        } else {
          html += `<ul>`;
      
          this.skills.forEach((skill) => {
            html += `
              <li>${skill.skill} - Proficiency: ${skill.proficiency}</li>
            `;
          });
      
          html += `</ul>`;
        }
      
        html += `</section>`;
      
        return html;
      }
      
  
      generatePDF() {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text(this.name, 10, 10);
        doc.setFontSize(12);
        doc.text(this.email, 10, 20);
      
        if (this.summary) {
          doc.text(this.summary, 10, 30);
        }
      
        let yOffset = 40;
      
        doc.setFontSize(14);
        doc.text('Education', 10, yOffset);
      
        yOffset += 10;
      
        if (this.education.length === 0) {
          doc.setFontSize(12);
          doc.text('None', 10, yOffset);
        } else {
          doc.setFontSize(12);
      
          this.education.forEach((edu) => {
            doc.text(`${edu.degree} in ${edu.field}`, 10, yOffset + 10);
            doc.text(`${edu.institution} (${edu.startDate} - ${edu.endDate})`, 10, yOffset + 20);
            yOffset += 30;
          });
        }
      
        yOffset += 10;
      
        doc.setFontSize(14);
        doc.text('Experience', 10, yOffset);
      
        yOffset += 10;
      
        if (this.experience.length === 0) {
          doc.setFontSize(12);
          doc.text('None', 10, yOffset);
        } else {
          doc.setFontSize(12);
      
          this.experience.forEach((exp) => {
            doc.text(exp.position, 10, yOffset + 10);
            doc.text(`${exp.company} (${exp.startDate} - ${exp.endDate})`, 10, yOffset + 20);
            doc.text(exp.description, 10, yOffset + 30);
            yOffset += 40;
          });
        }
      
        yOffset += 10;
      
        doc.setFontSize(14);
        doc.text('Skills', 10, yOffset);
      
        yOffset += 10;
      
        if (this.skills.length === 0) {
          doc.setFontSize(12);
          doc.text('None', 10, yOffset);
        } else {
          doc.setFontSize(12);
      
          this.skills.forEach((skill) => {
            doc.text(`${skill.skill} - Proficiency: ${skill.proficiency}`, 10, yOffset + 10);
            yOffset += 20;
          });
        }
      
         // Save the PDF file
    doc.save('curriculum_vitae.pdf');
}
}

// Event listener for the "Download PDF" button
const downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', () => {
myCV.generatePDF();
});
      
      



  
  