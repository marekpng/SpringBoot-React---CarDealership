package com.marek.cardealership.service;

import com.marek.cardealership.dto.UserDTO;
import com.marek.cardealership.entity.UserEntity;
import com.marek.cardealership.entity.repository.UserRepository;
import com.marek.cardealership.service.exceptions.DuplicateEmailException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

        @Autowired
        private PasswordEncoder passwordEncoder;

        @Autowired
        private UserRepository userRepository;

        @Override
        public UserDTO createUser(UserDTO model) {
            try {
                UserEntity newUserEntity = new UserEntity();

                newUserEntity.setEmail(model.getEmail());
                newUserEntity.setPassword(passwordEncoder.encode(model.getPassword()));

                userRepository.save(newUserEntity);

                UserDTO dto = new UserDTO();
                dto.setUserId(newUserEntity.getUserId());
                dto.setEmail(newUserEntity.getEmail());
                return dto;

            } catch (DataIntegrityViolationException e) {
                throw new DuplicateEmailException();
            }
        }

        @Override
        public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
            return userRepository.findByEmail(username)
                    .orElseThrow(() -> new UsernameNotFoundException("USERNAME " + username + " not found"));
        }
}


