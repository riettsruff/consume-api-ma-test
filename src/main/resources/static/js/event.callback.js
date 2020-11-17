switch(CURRENT_PATHNAME) {
  case "/":

    function modalBasicInformationClicked(currentModal) {
      const htmlInput = {
        id: currentModal.find("#informasi-dasar-id-user"),
        name: currentModal.find("#informasi-dasar-nama"),
        email: currentModal.find("#informasi-dasar-email"),
        gender: currentModal.find("#informasi-dasar-jenis-kelamin"),
        birthDate: currentModal.find("#informasi-dasar-tanggal-lahir")
      };
    
      Promise.all(
        Object
          .values(htmlInput)
          .map(item => INPUT_VALIDATION(item))
      ).then(async () => {
        const requestBody = Object.fromEntries(
          Object.entries(htmlInput).map(item => {
            return [item[0], item[1].val()];
          })
        );
    
        const save = await saveBasicInformation(requestBody);
    
        if(save) {
          swal("Sukses!", "Data Informasi Dasar berhasil diupdate.", "success")
            .then(() => {
              const htmlTableBody = getInnerHTMLTableBody([
                {
                  name: "Nama",
                  value: htmlInput.name.val()
                },
                {
                  name: "Email",
                  value: htmlInput.email.val()
                },
                {
                  name: "Jenis Kelamin",
                  value: htmlInput.gender.val()
                },
                {
                  name: "Tanggal Lahir",
                  value: htmlInput.birthDate.val()
                }
              ]);
    
              $(".area-informasi-dasar")
                .find(".body-box-info table tbody")
                .html(htmlTableBody);
        
              currentModal.modal("hide");
            });
        } else {
          swal("Oops!", "Data Informasi Dasar gagal diupdate.", "warning");
        }
      }).catch(err => {
        swal("Oops!", err, "warning");
      });
    }

    function modalCurrentOccupationClicked(currentModal) {
      const htmlInput = {
        id: currentModal.find("#pekerjaan-saat-ini-id-user"),
        job: currentModal.find("#jabatan-pekerjaan-saat-ini"),
        currentCompany: currentModal.find("#instansi-pekerjaan-saat-ini"),
        website: currentModal.find("#website-pekerjaan-saat-ini")
      };

      Promise.all(
        Object
          .values(htmlInput)
          .map(item => INPUT_VALIDATION(item))
      ).then(async () => {
        const requestBody = Object.fromEntries(
          Object.entries(htmlInput).map(item => {
            return [item[0], item[1].val()];
          })
        );

        const save = await saveCurrentOccupation(requestBody);

        if(save) {
          swal("Sukses!", "Data Pekerjaan Saat Ini berhasil diupdate", "success")
            .then(() => {
              const htmlTableBody = getInnerHTMLTableBody([
                {
                  name: "Jabatan",
                  value: htmlInput.job.val()
                },
                {
                  name: "Instansi",
                  value: htmlInput.currentCompany.val()
                },
                {
                  name: "Website",
                  value: htmlInput.website.val()
                }
              ]);

              $(".area-pekerjaan-saat-ini")
                .find(".body-box-info table tbody")
                .html(htmlTableBody);
        
              currentModal.modal("hide");
            });
        } else {
          swal("Oops!", "Data Pekerjaan Saat Ini gagal diupdate.", "warning");
        }
      }).catch(err => {
        swal("Oops!", err, "warning");
      });
    }

    function modalEducationClicked(currentModal) {
      const htmlInput = {
        id: currentModal.find("#pendidikan-id-user"),
        degree: currentModal.find("#tingkat-pendidikan"),
        university: currentModal.find("#instansi-pendidikan"),
        major: currentModal.find("#jurusan-pendidikan"),
        status: currentModal.find("#status-pendidikan")
      };

      Promise.all(
        Object
          .values(htmlInput)
          .map(item => INPUT_VALIDATION(item))
      ).then(async () => {
        const requestBody = Object.fromEntries(
          Object.entries(htmlInput).map(item => {
            return [item[0], item[1].val()];
          })
        );

        const save = await saveEducation(requestBody);

        if(save) {
          swal("Sukses!", "Data Pendidikan berhasil diupdate.", "success")
            .then(() => {
              const htmlTableBody = getInnerHTMLTableBody([
                {
                  name: "Tingkat",
                  value: htmlInput.degree.val()
                },
                {
                  name: "Instansi",
                  value: htmlInput.university.val()
                },
                {
                  name: "Jurusan",
                  value: htmlInput.major.val()
                },
                {
                  name: "Status",
                  value: htmlInput.status.val()
                }
              ]);

              $(".area-pendidikan")
                .find(".body-box-info table tbody")
                .html(htmlTableBody);
        
              currentModal.modal("hide");
            });
        } else {
          swal("Oops!", "Data Pendidikan gagal diupdate.", "warning");
        }
      }).catch(err => {
        swal("Oops!", err, "warning");
      });
    }

    function modalAddressClicked(currentModal) {
      const htmlInput = {
        id: currentModal.find("#alamat-id-user"),
        province: currentModal.find("#alamat-provinsi"),
        city: currentModal.find("#alamat-kota"),
        street1: currentModal.find("#alamat-nama-jalan-1"),
        street2: currentModal.find("#alamat-nama-jalan-2"),
        zipCode: currentModal.find("#alamat-kode-pos")
      };

      Promise.all(
        Object
          .values(htmlInput)
          .map(item => INPUT_VALIDATION(item))
      ).then(async () => {
        const requestBody = Object.fromEntries(
          Object.entries(htmlInput).map(item => {
            return [item[0], item[1].val()];
          })
        );

        const save = await saveAddress(requestBody);

        if(save) {
          swal("Sukses!", "Data Alamat berhasil diupdate", "success")
            .then(() => {
              const htmlTableBody = getInnerHTMLTableBody([
                {
                  name: "Provinsi",
                  value: htmlInput.province.val()
                },
                {
                  name: "Kota",
                  value: htmlInput.city.val()
                },
                {
                  name: "Nama Jalan 1",
                  value: htmlInput.street1.val()
                },
                {
                  name: "Nama Jalan 2",
                  value: htmlInput.street2.val()
                },
                {
                  name: "Kode Pos",
                  value: htmlInput.zipCode.val()
                }
              ]);
  
              $(".area-alamat")
                .find(".body-box-info table tbody")
                .html(htmlTableBody);
        
              currentModal.modal("hide");
            });
        } else {
          swal("Oops!", "Data Alamat gagal diupdate.", "warning");
        }
      }).catch(err => {
        swal("Oops!", err, "warning");
      });
    }

    function modalContactClicked() {
      const htmlInput = {
        id: currentModal.find("#kontak-id-user"),
        phone: currentModal.find("#kontak-nomor-hp"),
        facebook: currentModal.find("#kontak-id-profil-facebook"),
        instagram: currentModal.find("#kontak-username-instagram"),
        linkedin: currentModal.find("#kontak-url-profil-linkedin")
      };

      Promise.all(
        Object
          .values(htmlInput)
          .map(item => INPUT_VALIDATION(item))
      ).then(async () => {
        const requestBody = Object.fromEntries(
          Object.entries(htmlInput).map(item => {
            return [item[0], item[1].val()];
          })
        );

        const save = await saveContact(requestBody);

        if(save) {
          swal("Sukses!", "Data Kontak berhasil diupdate.", "success")
            .then(() => {
              const htmlTableBody = getInnerHTMLTableBody([
                {
                  name: "Nomor HP",
                  value: htmlInput.phone.val()
                },
                {
                  name: "ID Profil Facebook",
                  value: htmlInput.facebook.val()
                },
                {
                  name: "Username Instagram",
                  value: htmlInput.instagram.val()
                },
                {
                  name: "URL Profil Linkedin",
                  value: htmlInput.linkedin.val()
                }
              ]);

              $(".area-kontak")
                .find(".body-box-info table tbody")
                .html(htmlTableBody);
        
              currentModal.modal("hide");
            });
        } else {
          swal("Oops!", "Data Kontak gagal diupdate.", "warning");
        }
      }).catch(err => {
        swal("Oops!", err, "warning");
      });
    }

  break;

  case "/register":

    

  break;
}
