package com.jablan.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping(value = "/")
    public String homePageJablan() {
        return "main/home";
    }

    @GetMapping(value = "/about")
    public String aboutPageJablan() {
        return "main/about";
    }

    @GetMapping(value = "/contact")
    public String contactPageJablan() {
        return "main/contact";
    }

    @GetMapping(value = "/gallery")
    public String galleryPageJablan() {
        return "main/gallery";
    }

    @GetMapping(value = "/services")
    public String servicesPageJablan() {
        return "main/services";
    }

    @GetMapping(value = "/services/3d-visualization")
    public String visualisationPageJablan() {
        return "main/3d-visualization";
    }

    @GetMapping(value = "/services/furniture-making")
    public String furnitureMakingPageJablan() {
        return "main/furniture-making";
    }

    @GetMapping(value = "/services/interior-design")
    public String interiorDesignPageJablan() {
        return "main/interior-design";
    }

    @GetMapping(value = "/services/window-treatments")
    public String windowTreatmentsPageJablan() {
        return "main/window-treatments";
    }

    @GetMapping(value = "/services/new-home-selections")
    public String newHFomeSelectionsPageJablan() {
        return "main/new-home-selections";
    }

}
