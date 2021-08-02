package one.digital.innovation.agendatosapet.controller;

import one.digital.innovation.agendatosapet.excepition.ResourceNotFoundException;
import one.digital.innovation.agendatosapet.model.PetSchedule;
import one.digital.innovation.agendatosapet.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class PetScheduleController {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @GetMapping("/petschedule")
    public List<PetSchedule> getAllPetSchedules(){
        return scheduleRepository.findAll();
    }

    @GetMapping("/petschedule/{id}")
    public ResponseEntity<PetSchedule> getPetScheduleById(@PathVariable(value = "id") long petScheduleId)
        throws ResourceNotFoundException{
        PetSchedule petSchedule = scheduleRepository.findById(petScheduleId)
                .orElseThrow(() -> new ResourceNotFoundException("Schedule not found:: " + petScheduleId));
        return ResponseEntity.ok().body(petSchedule);
    }

    @PostMapping("/petschedule")
    public PetSchedule createPetSchedule(@Valid @RequestBody PetSchedule petSchedule){
        return scheduleRepository.save(petSchedule);
    }

    @PutMapping("/petschedule/{id}")
    public ResponseEntity<PetSchedule> updatePetSchedule(@PathVariable(value = "id") Long petScheduleId,
                                                         @Valid @RequestBody PetSchedule petScheduleDetails)
            throws ResourceNotFoundException{
        PetSchedule petSchedule = scheduleRepository.findById(petScheduleId)
                .orElseThrow(() -> new ResourceNotFoundException("Schedule not found for this id:: " + petScheduleId));

        petSchedule.setPetName(petScheduleDetails.getPetName());
        petSchedule.setPetOwner(petScheduleDetails.getPetOwner());
        petSchedule.setPhone(petScheduleDetails.getPhone());
        petSchedule.setDate(petScheduleDetails.getDate());

        final PetSchedule updatePetSchedule = scheduleRepository.save(petSchedule);
        return ResponseEntity.ok(updatePetSchedule);
    }

    @DeleteMapping(value = "/petschedule/{id}")
    public Map<String, Boolean> deletePetSchedule(@PathVariable(value = "id") Long petScheduleId)
        throws ResourceNotFoundException{
        PetSchedule petSchedule = scheduleRepository.findById(petScheduleId)
                .orElseThrow(()-> new ResourceNotFoundException("Schedule not found for this id: " + petScheduleId));
        scheduleRepository.delete(petSchedule);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
