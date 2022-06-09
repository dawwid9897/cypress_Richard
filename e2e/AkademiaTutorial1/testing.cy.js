
it('Testing_Confirmation_Mail' , () =>{ 
cy.visit('https://courses.ultimateqa.com/users/sign_in');
cy.contains('Welcome Back!')
.should('be.visible')
cy.get(".form__control")
.eq(0). type('bow-underline@mvz0cimk.mailosaur.net')
cy.get(".form__control")
.eq(1). type('tester123')
cy.contains('Sign in').click();


})
it.only('Request_POST' , () =>{ 

    cy.request({

        method: 'POST',

        url: 'https://mailosaur.com/api/messages/search?server=mvz0cimk',

        headers: {

              Authorization: 'Basic ' + Buffer.from('tt7ao1nebUqaZSeE').toString('base64')

        },
        body: {
          sentTo: "bow-underline@mvz0cimk.mailosaur.net",
          subject: "Your Ultimate QA course details."
        }
      
      }) .then((res)=> {
        expect(res.body.items[0].subject).equal('Your Ultimate QA course details.')
            
      })
      
    
    })


    
