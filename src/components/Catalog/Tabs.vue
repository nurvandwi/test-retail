<template>
  <div class="marginTitle">
    <div class="content m-0 col-md-12  px-0">
      <table class="table px-0 mb-1 mx-0">
        <thead>
          <tr>
            <th scope="col px-0">
              <button
                @click="selected = null"
                type="button"
                class="btn font-custom rounded-pill px-0 font-weight-bolder btn-menu"
              >
                <h5 class="font14 mb-0 font-weight-bold px-3 py-1">Semua</h5>
              </button>
            </th>
            <th scope="col px-0">
              <button
                @click="selected = 'Produk'"
                type="button"
                class="btn font-custom rounded-pill px-0 font-weight-bolder btn-menu"
              >
                <h5 class="font14 mb-0 font-weight-bold px-3 py-1">Produk</h5>
              </button>
            </th>
            <th scope="col px-0">
              <button
                @click="selected = 'Rebate'"
                type="button"
                class="btn font-custom rounded-pill font-weight-bolder btn-menu"
              >
                <h5 class="font14 mb-0 font-weight-bold px-2 py-1">Rebate</h5>
              </button>
            </th>
            <th scope="col px-0">
              <button
                @click="selected = 'ewallet'"
                type="button"
                class="btn font-custom rounded-pill font-weight-bolder btn-menu"
              >
                <h5 class="font14 mb-0 font-weight-bold px-2 py-1">EWallet</h5>
              </button>
            </th>
            <th scope="col px-0">
              <button
                @click="selected = 'Pulsa'"
                type="button"
                class="btn font-custom rounded-pill font-weight-bolder btn-menu"
              >
                <h5 class="font14 mb-0 font-weight-bold px-2 py-1">Pulsa</h5>
              </button>
            </th>
            <th scope="col px-0">
              <button
                @click="selected = 'pointocash'"
                type="button"
                class="btn font-custom rounded-pill font-weight-bolder btn-menu"
              >
                <h5 class="font14 mb-0 font-weight-bold px-2 py-1">
                  Poin2Cash
                </h5>
              </button>
            </th>
          </tr>
        </thead>
      </table>
    </div>

    <list-item :contentFor="'ListTransaksi'" :alltransaction="selectTab" />
  </div>
</template>

<script>
import axios from "axios";
import ListItem from "./ListItem";

export default {
  components: { ListItem },
  data() {
    return {
      selected: null,
      alltransaction: {
        data: [],
      },
    };
  },
  methods: {
    allItem() {
      axios
        .get(`https://www.inosis.co.id/mv_demo_api/api.php/view_transaksi`, {
          params: {
            outlet_id: this.$route.params.outlet_id,
            token: localStorage.token,
          },
        })
        .then((res) => {
          this.alltransaction = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
  computed: {
    selectTab() {
      if (this.selected == null) {
        return this.alltransaction.data;
      } else {
        return this.alltransaction.data.filter(
          (x) => x.item === this.selected.toLocaleLowerCase()
        );
      }
    },
  },
  mounted() {
    this.allItem();
  },
};
</script>

<style scoped>
table td,
.table th {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
  padding-right: 0.3rem !important;
  padding-left: 0.3rem !important;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.imagecustom {
  width: 15%;
}

.shadow-item {
  box-shadow: 0 0.1rem 0.8rem rgba(150, 142, 255, 0.15) !important;
}

.btn-menu {
  color: #212529;
  background-color: #f1f5ff;
}

.btn:hover {
  background-color: #4e37b2;
  border-color: #4e37b2;
  color: white;
}

.btn.focus,
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(75, 55, 178, 0.2);
}

.table thead th {
  vertical-align: bottom;
  border-bottom: none;
}

.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: none;
}

.content {
  /* This is the magic bit for Firefox */
  overflow-x: scroll;
  scrollbar-width: none;
  max-width: 100%;
}

.content::-webkit-scrollbar {
  /* This is the magic bit for WebKit */
  display: flex;
}

.mb-card {
  margin-bottom: 10rem;
}

.shadow1 {
  box-shadow: 0 0.1rem 0.3rem rgba(182, 189, 255, 0.308) !important;
}

.shadow-item {
  box-shadow: 0 0.1rem 0.8rem rgba(150, 142, 255, 0.15) !important;
}

.card {
  border: none !important;
}

.marginTitle {
  margin-top: 4rem;
}

.text-violet {
  color: #4e37b2;
}

.text-violet:hover {
  color: #4e37b2;
  text-decoration: underline;
}

@media screen and (max-width: 1000px) {
  .content {
    /* This is the magic bit for Firefox */
    overflow-x: scroll;
    scrollbar-width: none;
    max-width: 95%;
  }

  .content::-webkit-scrollbar {
    /* This is the magic bit for WebKit */
    display: none;
  }

  .imagecustom {
    width: 17%;
  }

  .size-delete {
    width: 40%;
  }

  .padding-card {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }

  .size-icon {
    width: 2.5rem;
  }

  .font20 {
    font-size: 20px;
  }

  .font22 {
    font-size: 22px;
  }

  .font14 {
    font-size: 14px;
  }

  .font12px {
    font-size: 12px;
  }

  .font14px {
    font-size: 14px;
  }

  .font14px {
    font-size: 14px;
  }

  .font11 {
    font-size: 11px;
  }
}
</style>
