package com.codeup.testrepo.controller;

import com.codeup.testrepo.models.User;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FragmentsController {

    @GetMapping("/logged-in-navbar")
    public String getProfile(HttpServletRequest request) {
        User user =(User) request.getSession().getAttribute("user");
        if(user.getRole().getId() == 1){
            return "redirect:/buyer-profile.html";
        } else if(user.getRole().getId() == 2) {
            return "redirect:/seller-profile.html";
        } else if(user.getRole().getId() == 3) {
            return "redirect:/neighbor-profile.html";
        } else {
            return "redirect:/error";
        }
    }
}
