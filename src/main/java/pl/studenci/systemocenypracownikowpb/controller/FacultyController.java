package pl.studenci.systemocenypracownikowpb.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.studenci.systemocenypracownikowpb.entity.Faculty;
import pl.studenci.systemocenypracownikowpb.repository.FacultyRepository;

import java.util.List;

@RestController
@RequestMapping("/api/faculties")
public class FacultyController {

    private final FacultyRepository facultyRepository;

    public FacultyController(FacultyRepository facultyRepository) {
        this.facultyRepository = facultyRepository;
    }

    @GetMapping
    public List<Faculty> getAllFaculties() {
        return facultyRepository.findAll();
    }
}