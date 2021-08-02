package one.digital.innovation.agendatosapet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import  one.digital.innovation.agendatosapet.model.PetSchedule;

@Repository
public interface ScheduleRepository extends JpaRepository<PetSchedule, Long> {
}
