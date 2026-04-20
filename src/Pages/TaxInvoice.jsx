import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Card, Button, message, Tooltip } from "antd";
import {
  EyeOutlined,
  DownloadOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  ExportOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

import InputField from "../Components/fields/InputField";
import BackButton from "../Components/BackButton"
import DataTableImport from "react-data-table-component";
const DataTable = DataTableImport.default || DataTableImport;
import PrevBtn from "../Components/PrevBtn";
import HButton from "../Components/HButton";
import FilterTaxInvoice from "../Components/FilterTaxInvoice";


const existingInvoices = [
  { id: "LPI2026-1168", name: "RAJ INDUSTRIES", mobile: "9892105126",  gstNo: "27AYSPS4552M1ZG", date: "31/03/2026", services: "IEC Renewal" },
  { id: "LPI2026-1167", name: "RICHA LIFESTYLE ",          mobile: "08178799197", gstNo: "09ABGFR9238L1ZG", date: "02/04/2026", services: "Startup India Certificate, AD Code" },
  { id: "LPI2026-1166", name: "RICHA LIFESTYLE RETAIL",          mobile: "08178799197", gstNo: "09ABGFR9238L1ZG", date: "28/03/2026", services: "FSSAI Central License" },
  { id: "LPI2026-1165", name: "ARS ROAD SAFETY EQUIPMENTS",      mobile: "8530661208",  gstNo: "27GEPPS0890B2Z3", date: "30/03/2026", services: "ISO Certificate" },
  { id: "LPI2026-1164", name: "A & C PHARMASPECIALITIES",   mobile: "9833505284",  gstNo: "27ABTFA2233P1ZX", date: "25/03/2026", services: "RCMC Certificate, GOVT-FEES" },
  { id: "LPI2026-1163", name: "TATA INDIAN INST",   mobile: "9884394529",  gstNo: "27AAHCT8078K1ZL", date: "26/03/2026", services: "ISO Certificate" },
  { id: "LPI2026-1162", name: "KING IMPORT & EXPORT PVT",   mobile: "9340750997",  gstNo: "23AAECK5478R2ZS", date: "17/03/2026", services: "ISO Certificate" },
  { id: "LPI2026-1161", name: "DUHA INDUSTRIES LLP",             mobile: "9974115500",  gstNo: "24AAYFD4057A1ZI", date: "25/03/2026", services: "IEC Renewal" },
  { id: "LPI2026-1160", name: "KINGMAKER IMPORT & EXPORT PVT",   mobile: "9238296712",  gstNo: "23AAECK5478R2ZS", date: "17/03/2026", services: "ISO Certificate" },
  { id: "LPI2026-1159", name: "EXCLUSIVE GLOBAL ECOM",           mobile: "9811605627",  gstNo: "07AKTPM0426F1Z5", date: "24/03/2026", services: "IEC Renewal" },
  { id: "LPI2026-1158", name: "SUNRISE TRADERS",                 mobile: "9765432100",  gstNo: "06ABCDE1234F1ZP", date: "20/03/2026", services: "LUT Registration" },
  { id: "LPI2026-1157", name: "GREEN EARTH EXPORTS",             mobile: "9654321098",  gstNo: "29XYZAB5678C1ZQ", date: "18/03/2026", services: "AD Code, IEC Renewal" },
];

const ServiceCell = ({ value }) => (
  <Tooltip title={value} placement="topLeft" mouseEnterDelay={0.3}>
    <span style={{
      display: "block",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      fontSize: "11.5px",
      color: "#4b5563",
      cursor: "default",
      maxWidth: "100%",
    }}>
      {value}
    </span>
  </Tooltip>
);

const ActionButtons = ({ onPreview, onDownload, onEdit, onDelete }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "3px", flexWrap: "nowrap" }}>
    {[
      { label: "Preview",  icon: <EyeOutlined />,      bg: "#7c3aed", fn: onPreview  },
      { label: "Download", icon: <DownloadOutlined />, bg: "#3b82f6", fn: onDownload },
      { label: "Edit",     icon: <EditOutlined />,     bg: "#10b981", fn: onEdit     },
      { label: "Delete",   icon: <DeleteOutlined />,   bg: "#ef4444", fn: onDelete   },
    ].map(({ label, icon, bg, fn }) => (
      <button key={label} onClick={fn}
        style={{
          display: "inline-flex", alignItems: "center", gap: "3px",
          backgroundColor: bg, color: "#fff", border: "none", borderRadius: "4px",
          padding: "4px 7px", fontSize: "11.5px", fontWeight: 500,
          cursor: "pointer", whiteSpace: "nowrap", lineHeight: 1,
        }}
        onMouseEnter={e => e.currentTarget.style.filter = "brightness(0.85)"}
        onMouseLeave={e => e.currentTarget.style.filter = "none"}
      >
        {icon} {label}
      </button>
    ))}
  </div>
);

const TaxInvoice = () => {
  const [view, setView] = useState("list");
  const headerRef = useRef(null);
  const [scrollH, setScrollH] = useState("500px");

  useEffect(() => {
    const calc = () => {
      if (headerRef.current) {
        const hh = headerRef.current.getBoundingClientRect().height;
        setScrollH(`calc(100% - ${hh}px)`);
      }
    };

    const t = setTimeout(calc, 50);
    window.addEventListener("resize", calc);
    return () => { clearTimeout(t); window.removeEventListener("resize", calc); };
  }, [view]);

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: { customer: "", previousBalance: 0, received: 0 },
  });

  const onSubmit = (data) => {
    console.log("FINAL DATA 👉", data);
    message.success("Tax Invoice Created Successfully");
    reset();
    setView("list");
  };

  const tStyles = {
    table: { style: { width: "100%" } },
    headRow: {
      style: {
        backgroundColor: "#1a1a1a", color: "#fff",
        fontWeight: "600", fontSize: "12px", minHeight: "40px",
      },
    },
    headCells: { style: { color: "#fff", paddingLeft: "8px", paddingRight: "4px", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.5px", fontSize:"12px" } },
    rows: {
      style: { borderBottom: "1px solid #e5e7eb", minHeight: "44px" },
      stripedStyle: { backgroundColor: "#f9fafb" },
      highlightOnHoverStyle: {
        backgroundColor: "#eff6ff", borderBottomColor: "#dbeafe",
        outline: "none", transition: "background 0.12s",
      },
    },
    pagination: {
      style: { borderTop: "1px solid #e5e7eb", fontSize: "12px", minHeight: "46px", backgroundColor: "#fff" },
    },
  };

  const cols = [
    {
      name: "Invoice No", selector: r => r.id, sortable: true, width: "100px",
      cell: r => <span style={{ fontWeight: 600, fontSize: "11px", color: "#1f2937" }}>{r.id}</span>,
    },
    {
      name: "Name", selector: r => r.name, sortable: true, wrap: true, width: "130px",
      cell: r => <span style={{ fontWeight: 500, fontSize: "11px", lineHeight: "1.3" }}>{r.name}</span>,
    },
    {
      name: "Mobile", selector: r => r.mobile, width: "100px",
      cell: r => <span style={{ fontSize: "11px" }}>{r.mobile}</span>,
    },
    {
      name: "GST No", selector: r => r.gstNo, width: "130px",
      cell: r => <span style={{ fontSize: "10.5px", fontFamily: "monospace", letterSpacing: "-0.3px" }}>{r.gstNo}</span>,
    },
    {
      name: "Date", selector: r => r.date, width: "82px",
      cell: r => <span style={{ fontSize: "11px" }}>{r.date}</span>,
    },
    {
      name: "Services", selector: r => r.services, grow: 1, minWidth: "100px",
      cell: r => <ServiceCell value={r.services} />,
    },
    {
      name: "Actions", width: "280px",
      cell: r => (
        <ActionButtons
          onPreview={() => message.info(`Preview: ${r.id}`)}
          onDownload={() => message.success(`Downloading: ${r.id}`)}
          onEdit={() => message.info(`Edit: ${r.id}`)}
          onDelete={() => message.error(`Deleted: ${r.id}`)}
        />
      ),
    },
  ];

  // ── LIST VIEW ──────────────────────────────────────────────────────────────
  if (view === "list") {
    return (
      <div className="mt-1  p-3 sm:p-4 rounded-lg shadow-sm overflow-hidden">
      <div style={{
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden",
  padding: "0px 0px 12px",
}}>

        <div ref={headerRef} style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "10px", marginBottom: "12px", flexShrink: 0, marginTop: "0px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <BackButton/>
            <h2 style={{ fontSize: "17px", fontWeight: 600, color: "#1f2937", margin: 0, whiteSpace: "nowrap" }}>
              Generate Tax Invoice
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <HButton onClick={() => message.info("Tax Invoice No clicked")}>
              <FileTextOutlined /> Tax Invoice No
            </HButton>
            <HButton onClick={() => setView("form")}>
              <PlusOutlined /> Generate Invoice
            </HButton>
            <HButton onClick={() => message.info("Exporting…")}>
              <ExportOutlined /> Export Excel
            </HButton>
           <FilterTaxInvoice/>
          </div>
        </div>

        <div style={{
          flex: 1, minHeight: 0,
          borderRadius: "8px", overflow: "hidden",
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
        }}>
          <DataTable
            columns={cols}
            data={existingInvoices}
            pagination
            paginationPerPage={10}
            striped
            highlightOnHover
            fixedHeader
            fixedHeaderScrollHeight={scrollH}
            customStyles={tStyles}
            noDataComponent={
              <div style={{ padding: "40px", color: "#9ca3af", fontSize: "13px" }}>No invoices found.</div>
            }
          />
        </div>
      </div>
      </div>
    );
  }

  // ── FORM VIEW ──────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        .ti-grid-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 768px) {
          .ti-grid-3 { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .ti-grid-3 { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ padding: "16px 20px", minHeight: "100%", overflowY: "auto", boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <PrevBtn onClick={() => setView("list")}/>
          <h2 style={{ fontSize: "17px", fontWeight: 600, color: "#1f2937", margin: 0 }}>
            Create Tax Invoice
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Customer */}
          <InputField control={control} errors={errors} name="customer" label="Customer" />

          {/* Products */}
          <Card className="!p-4">
            <InputField control={control} errors={errors} name="products"
              type="select" mode="multiple" label="Select Products"
              options={[
                { label: "Product 1", value: "1" },
                { label: "Product 2", value: "2" },
                { label: "Product 3", value: "3" },
              ]}
            />
            <p className="text-xs text-gray-500 mt-1">Select products to set quantity, rate and stock used.</p>
          </Card>

          {/* Row: Date | Payment Mode | Sales Person */}
          <div className="ti-grid-3">
            <InputField control={control} errors={errors} name="date" type="date" label="Date" />
            <InputField control={control} errors={errors} name="paymentMode" type="option" label="Mode/Terms of Payment"
              options={[{ label: "Cash", value: "cash" }, { label: "Bank", value: "bank" }, { label: "UPI", value: "upi" }]} />
            <InputField control={control} errors={errors} name="salesPerson" label="Sales Person" />
          </div>

          {/* Row: Dispatched Through | Destination | Reminder Date */}
          <div className="ti-grid-3">
            <InputField control={control} errors={errors} name="dispatch" label="Dispatched Through" />
            <InputField control={control} errors={errors} name="destination" label="Destination" />
            <InputField control={control} errors={errors} name="reminderDate" type="date" label="Reminder Date" />
          </div>

          {/* Terms of Delivery */}
          <InputField control={control} errors={errors} name="terms" type="description" label="Terms of Delivery" rows={3} />

          {/* Row: Tax Type | PO Number | PO Date */}
          <div className="ti-grid-3">
            <InputField control={control} errors={errors} name="taxType" type="option" label="Tax Type"
              options={[{ label: "GST", value: "gst" }]} />
            <InputField control={control} errors={errors} name="poNumber" label="PO Number" />
            <InputField control={control} errors={errors} name="poDate" type="date" label="PO Date" />
          </div>

          {/* Row: Freight | Previous Balance | Received Amount */}
          <div className="ti-grid-3">
            <InputField control={control} errors={errors} name="freight" type="numeric" label="Freight & Cartage Amount" />
            <InputField control={control} errors={errors} name="previousBalance" type="numeric" label="Previous Balance" />
            <InputField control={control} errors={errors} name="received" type="numeric" label="Received Amount" />
          </div>

          <div className="pt-4 pb-8">
            <Button htmlType="submit" type="primary"
              className="!bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] !border-none !text-white px-6 py-2 rounded-md">
              Create Tax Invoice
            </Button>
          </div>

        </form>
      </div>
    </>
  );
};

export default TaxInvoice;