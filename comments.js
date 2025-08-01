const commentsData = [
  { email: "emma***@yahoo.com", text: "Absolutely brilliant service. I was locked out of my device for weeks and nothing else worked until I found this platform.", date: "2025-07-15" },
  { email: "sarah***@gmail.com", text: "Fantastic service!", date: "2025-07-15" },
  { email: "james***@gmail.com", text: "The service was outstanding. I honestly didn’t expect such fast results, but everything was completed successfully and my device was back to normal in no time!", date: "2025-07-13" },
  { email: "george***@icloud.com", text: "Everything went well.", date: "2025-07-13" },
  { email: "lucy***@icloud.com", text: "You guys are the best.", date: "2025-07-14" },
  { email: "zoe***@yahoo.com", text: "One of the best support experiences I’ve had. These guys know what they’re doing. Totally worth every penny.", date: "2025-07-10" },
  { email: "kyle***@icloud.com", text: "Absolutely brilliant service. I was locked out of my device for weeks and nothing else worked until I found this platform.", date: "2025-07-09" },
  { email: "daniel***@gmail.com", text: "Really grateful for the support team. They responded promptly and guided me through the entire process. I now have full access to my device again!", date: "2025-07-07" },
  { email: "emily***@yahoo.com", text: "Highly recommended! I had doubts at first, but after using the service, I’m genuinely impressed with the professionalism and speed.", date: "2025-07-04" },
  { email: "xander***@outlook.com", text: "Worked perfectly. Big thanks!", date: "2025-07-01" },
  { email: "nora***@outlook.com", text: "Quick and reliable!", date: "2025-06-28" },
   { email: "emma***@yahoo.com", text: "Can’t believe how easy they made it.", date: "2025-04-01" },
  { email: "mark***@gmail.com", text: "Answered my questions quickly.", date: "2025-04-02" },
  { email: "sarah***@icloud.com", text: "Love how clear the process was.", date: "2025-04-04" },
  { email: "james***@outlook.com", text: "The only service that actually worked.", date: "2025-04-05" },
  { email: "george***@gmail.com", text: "I’ll definitely recommend to others.", date: "2025-04-07" },
  { email: "lucy***@icloud.com", text: "Support stayed with me through each step.", date: "2025-04-08" },
  { email: "zoe***@yahoo.com", text: "Simple, fast, and secure!", date: "2025-04-10" },
  { email: "kyle***@gmail.com", text: "Impressed with the communication.", date: "2025-04-11" },
  { email: "daniel***@outlook.com", text: "Service was completed exactly as promised.", date: "2025-04-12" },
  { email: "maria***@gmail.com", text: "Legit and reliable.", date: "2025-04-13" },
  { email: "emily***@yahoo.com", text: "I’ve used other services—none compare to this.", date: "2025-04-15" },
  { email: "xander***@icloud.com", text: "Glad I trusted them with my iPhone.", date: "2025-04-16" },
  { email: "nora***@gmail.com", text: "No delays, just results.", date: "2025-04-17" },
  { email: "sam***@yahoo.com", text: "The tracking system worked perfectly.", date: "2025-04-18" },
  { email: "victor***@icloud.com", text: "Effortless from start to finish.", date: "2025-04-20" },
  { email: "zane***@gmail.com", text: "They even followed up with me afterward.", date: "2025-04-21" },
  { email: "kelly***@outlook.com", text: "Professional and quick response.", date: "2025-04-23" },
  { email: "claire***@icloud.com", text: "Got my device unlocked in hours!", date: "2025-04-24" },
  { email: "leo***@gmail.com", text: "Best tech support experience I’ve had.", date: "2025-04-25" },
  { email: "kevin***@yahoo.com", text: "Totally hassle-free service.", date: "2025-04-26" },
  { email: "william***@gmail.com", text: "I’m so relieved I found this place.", date: "2025-04-27" },
  { email: "gabriel***@icloud.com", text: "Every step was clearly explained.", date: "2025-04-28" },
  { email: "wendy***@outlook.com", text: "Their process is very efficient.", date: "2025-04-29" },
  { email: "ian***@gmail.com", text: "Worked like magic—highly recommend!", date: "2025-05-01" },
  { email: "matt***@icloud.com", text: "Definitely a 5-star experience.", date: "2025-05-02" },
  { email: "anna***@outlook.com", text: "Perfect for someone like me who isn’t tech-savvy.", date: "2025-05-03" },
  { email: "uma***@yahoo.com", text: "Payment was smooth and secure.", date: "2025-05-04" },
  { email: "steven***@gmail.com", text: "Felt supported the whole time.", date: "2025-05-05" },
  { email: "felix***@icloud.com", text: "Great value for money.", date: "2025-05-06" },
  { email: "oliver***@gmail.com", text: "No shady stuff, very transparent.", date: "2025-05-07" },
  { email: "frank***@yahoo.com", text: "Better than I expected.", date: "2025-05-08" },
  { email: "linda***@outlook.com", text: "Clear instructions and quick unlock.", date: "2025-05-09" },
  { email: "fred***@icloud.com", text: "It worked just as advertised.", date: "2025-05-10" },
  { email: "kate***@gmail.com", text: "Even my carrier was impressed!", date: "2025-05-11" },
  { email: "luke***@icloud.com", text: "Couldn’t have asked for better help.", date: "2025-05-12" },
  { email: "ben***@outlook.com", text: "Super friendly and helpful staff.", date: "2025-05-13" },
  { email: "michael***@gmail.com", text: "Best iCloud unlock team hands down.", date: "2025-05-14" },
  { email: "nina***@icloud.com", text: "Absolutely worth every penny.", date: "2025-05-15" },
  { email: "abby***@gmail.com", text: "Really grateful I found them online.", date: "2025-05-16" },
  { email: "rachel***@icloud.com", text: "Support was fast and honest.", date: "2025-05-17" },
  { email: "kenneth***@yahoo.com", text: "I appreciate how fast it was done.", date: "2025-05-18" },
  { email: "harry***@gmail.com", text: "Real humans helping you—not bots!", date: "2025-05-19" },
  { email: "susan***@icloud.com", text: "Got my IMEI fixed without issues.", date: "2025-05-20" },
  { email: "roger***@yahoo.com", text: "The team knows exactly what they’re doing.", date: "2025-05-21" },
  { email: "laura***@gmail.com", text: "No hidden fees or tricks.", date: "2025-05-22" },
  { email: "chris***@icloud.com", text: "They kept every promise.", date: "2025-05-23" },
  { email: "alex***@gmail.com", text: "Worked smoothly on my MacBook too.", date: "2025-05-24" },
  { email: "louis***@outlook.com", text: "Everything got fixed without hassle.", date: "2025-05-25" },
  { email: "adam***@icloud.com", text: "Solved my issue in one day.", date: "2025-05-26" },
  { email: "jonas***@gmail.com", text: "I’m already recommending this to friends.", date: "2025-05-27" },
  { email: "sam***@gmail.com", text: "Thanks team!", date: "2025-06-23" },
  { email: "victor***@yahoo.com", text: "Fantastic service!", date: "2025-06-19" },
  { email: "zane***@yahoo.com", text: "Highly recommended! I had doubts at first, but after using the service, I’m genuinely impressed with the professionalism and speed.", date: "2025-06-19" },
  { email: "kelly***@icloud.com", text: "Thank you for the great work!", date: "2025-06-12" },
  { email: "claire***@icloud.com", text: "Highly recommended! I had doubts at first, but after using the service, I’m genuinely impressed with the professionalism and speed.", date: "2025-06-07" },
  { email: "leo***@outlook.com", text: "You guys are the best.", date: "2025-06-07" },
  { email: "kevin***@icloud.com", text: "Thank you for the great work!", date: "2025-06-06" },
  { email: "william***@gmail.com", text: "Really grateful for the support team. They responded promptly and guided me through the entire process. I now have full access to my device again!", date: "2025-05-31" },
  { email: "gabriel***@outlook.com", text: "Fantastic service!", date: "2025-05-31" },
  { email: "wendy***@outlook.com", text: "The service was outstanding. I honestly didn’t expect such fast results, but everything was completed successfully and my device was back to normal in no time!", date: "2025-05-30" },
  { email: "ian***@icloud.com", text: "You guys are the best.", date: "2025-05-30" },
  { email: "matt***@outlook.com", text: "Really grateful for the support team. They responded promptly and guided me through the entire process. I now have full access to my device again!", date: "2025-05-30" },
  { email: "anna***@gmail.com", text: "Everything went well.", date: "2025-05-28" },
  { email: "mia***@icloud.com", text: "Service was smooth and straightforward. Very impressed with the results!", date: "2025-07-18" },
  { email: "ethan***@gmail.com", text: "I had almost given up until I found this site. Thank you for bringing my iPhone back!", date: "2025-07-17" },
  { email: "julia***@yahoo.com", text: "Clear instructions, quick support, and everything worked perfectly. Recommended!", date: "2025-07-16" },
  { email: "noah***@outlook.com", text: "Tried multiple services before, but this was the only one that actually worked. 10/10.", date: "2025-07-16" },
  { email: "ava***@icloud.com", text: "Support was very helpful and responsive. Got my device fixed the same day.", date: "2025-07-15" },
  { email: "liam***@yahoo.com", text: "Professional and secure process. I appreciate the guidance and honesty.", date: "2025-07-14" },
  { email: "ella***@gmail.com", text: "So glad I found this service. You guys really helped me out!", date: "2025-07-14" },
  { email: "logan***@outlook.com", text: "It worked flawlessly. Everything was explained clearly. Appreciate the help.", date: "2025-07-13" },
  { email: "grace***@icloud.com", text: "Best unlocking service I've used. Fast, secure, and easy.", date: "2025-07-13" },
  { email: "jackson***@gmail.com", text: "They handled everything professionally. I got updates at every step.", date: "2025-07-12" },
  { email: "aria***@yahoo.com", text: "Efficient, helpful, and quick to respond. Definitely coming back if needed.", date: "2025-07-11" },
  { email: "sebastian***@icloud.com", text: "Took less than 24 hours to resolve my issue. Amazing!", date: "2025-07-11" },
  { email: "layla***@gmail.com", text: "I'm seriously impressed with how smooth the whole process was.", date: "2025-07-10" },
  { email: "elijah***@outlook.com", text: "Super reliable and trustworthy. Delivered as promised.", date: "2025-07-09" },
  { email: "sofia***@icloud.com", text: "From start to finish, this was a breeze. Thank you so much!", date: "2025-07-08" },
  { email: "ryan***@yahoo.com", text: "Fast, friendly, and efficient. My phone works perfectly again.", date: "2025-07-08" },
  { email: "harper***@gmail.com", text: "Clear communication and top-notch service. Would use again.", date: "2025-07-07" },
  { email: "aiden***@icloud.com", text: "Everything worked just as they said. Fully satisfied!", date: "2025-07-06" },
  { email: "chloe***@outlook.com", text: "Good service with helpful support team. It was worth it!", date: "2025-07-06" },
  { email: "lucas***@yahoo.com", text: "Legit and trustworthy. Solved my iCloud lock quickly.", date: "2025-07-05" },
  { email: "uma***@yahoo.com", text: "A reliable and effective solution when I needed it most. Thank you so much for the help with recovering my iCloud account.", date: "2025-05-27" },
  { email: "steven***@yahoo.com", text: "Worked perfectly. Big thanks!", date: "2025-05-27" },
  { email: "felix***@gmail.com", text: "Really grateful for the support team. They responded promptly and guided me through the entire process. I now have full access to my device again!", date: "2025-05-23" },
  { email: "oliver***@yahoo.com", text: "Fantastic service!", date: "2025-05-18" },
  { email: "frank***@outlook.com", text: "From start to finish, I was kept informed and supported. And best of all, my iCloud was removed just like they said it would be!", date: "2025-05-17" },
  { email: "kate***@icloud.com", text: "Everything went smoothly. I followed the instructions and within a day, my iPhone was working perfectly again. Thank you!", date: "2025-05-12" },
  { email: "luke***@outlook.com", text: "Appreciate your help so much.", date: "2025-05-11" },
  { email: "ben***@outlook.com", text: "Fast and effective. Cheers!", date: "2025-05-06" },
  { email: "michael***@gmail.com", text: "Thank you for the great work!", date: "2025-05-06" },
  { email: "ian***@yahoo.com", text: "Fast and effective. Cheers!", date: "2025-05-05" },
  { email: "nina***@gmail.com", text: "Quick and reliable!", date: "2025-05-04" },
  { email: "abby***@yahoo.com", text: "Everything went smoothly. I followed the instructions and within a day, my iPhone was working perfectly again. Thank you!", date: "2025-05-03" },
  { email: "rachel***@outlook.com", text: "Thank you for the great work!", date: "2025-04-24" },
  { email: "kenneth***@icloud.com", text: "Appreciate your help so much.", date: "2025-04-24" },
  { email: "harry***@gmail.com", text: "The service exceeded my expectations. Professional, fast, and secure. I feel confident using my phone again.", date: "2025-04-08" },
  { email: "susan***@yahoo.com", text: "Absolutely brilliant service. I was locked out of my device for weeks and nothing else worked until I found this platform.", date: "2025-04-07" },
  { email: "roger***@icloud.com", text: "Worked perfectly. Big thanks!", date: "2025-04-05" },
  { email: "laura***@gmail.com", text: "Thank you for the great work!", date: "2025-04-05" },
  { email: "chris***@outlook.com", text: "Great communication and trustworthy process. They delivered on their promises. Definitely recommending this to friends.", date: "2025-04-04" },
  { email: "louis***@outlook.com", text: "The service was outstanding. I honestly didn’t expect such fast results, but everything was completed successfully and my device was back to normal in no time!", date: "2025-04-02" },

 ];
