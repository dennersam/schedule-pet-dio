package one.digital.innovation.agendatosapet.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tb_petschedule")
public class PetSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "petName", nullable = false)
    private String petName;

    @Column(name = "petOwner", nullable = false)
    private String petOwner;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "date", nullable = false)
    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private LocalDate date;

    @Override
    public  String toString(){
        return "Schedule: Pet Name: "
                + petName + ", Pet Onwer: "
                + petOwner + ", Date: "
                + date + ".";
    }
}
