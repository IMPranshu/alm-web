import React, { useState, useEffect } from "react";
import { ExportDialog } from "@gooddata/sdk-ui-kit";

const style = { height: 850 };
const buttonsContainerStyle = { marginTop: 15 };
const errorStyle = { color: "red", marginTop: 5 };
const loadingStyle = { minHeight: 30 };

const Button = ({ children, onClick, disabled }) => (
    <button
        className={`gd-button gd-button-secondary ${disabled ? "disabled" : ""}`}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
);

const DownloaderId = "downloader";
const downloadFile = (uri) => {
    let anchor = document.getElementById(DownloaderId);
    if (!anchor) {
        anchor = document.createElement("a");
        anchor.id = DownloaderId;
        document.body.appendChild(anchor);
    }
    anchor.href = uri;
    anchor.click();
};

export const Export = ({ children, filters }) => {
    const [
        { exportFunction, exportConfig, showExportDialog, errorMessage, downloadUri, exporting },
        setState,
    ] = useState({
        showExportDialog: false,
        errorMessage: undefined,
        exportFunction: () => undefined,
        downloadUri: undefined,
        exportConfig: undefined,
        exporting: false,
    });

    const onExportReady = (exportFunction) => setState((oldState) => ({ ...oldState, exportFunction }));

    const exportToCSV = () => setState((oldState) => ({ ...oldState, exportConfig: {} }));
    const exportToXLSX = () => setState((oldState) => ({ ...oldState, exportConfig: { format: "xlsx" } }));
    const exportWithCustomName = () =>
        setState((oldState) => ({ ...oldState, exportConfig: { title: "CustomName" } }));

    const openExportDialog = () => setState((oldState) => ({ ...oldState, showExportDialog: true }));
    const cancelExportDialog = () => setState((oldState) => ({ ...oldState, showExportDialog: false }));
    const submitExportDialog = ({ mergeHeaders, includeFilterContext }) => {
        const exportConfig = {
            format: "xlsx",
            title: "CustomName",
            mergeHeaders,
            includeFilterContext,
            showFilters: includeFilterContext && !!filters?.length,
        };

        setState((oldState) => ({ ...oldState, showExportDialog: false, exportConfig }));
    };

    useEffect(() => {
        const getExportUri = async () => {
            try {
                return (await exportFunction(exportConfig))?.uri;
            } catch (error) {
                let errorMessage = error.message;
                if (error.responseBody) {
                    errorMessage = JSON.parse(error.responseBody)?.error?.message;
                }
                throw errorMessage;
            }
        };

        if (exportFunction && exportConfig) {
            setState((oldState) => ({ ...oldState, exporting: true }));
            getExportUri()
                .then((uri) =>
                    setState((oldState) => ({
                        ...oldState,
                        errorMessage: undefined,
                        downloadUri: uri,
                        exporting: false,
                    })),
                )
                .catch((errorMessage) =>
                    setState((oldState) => ({
                        ...oldState,
                        errorMessage,
                        downloadUri: undefined,
                        exporting: false,
                    })),
                );
        }
    }, [exportFunction, exportConfig]);

    useEffect(() => {
        if (downloadUri) {
            downloadFile(downloadUri);

            setState((oldState) => ({
                ...oldState,
                downloadUri: undefined,
            }));
        }
    }, [downloadUri]);

    return (
        <div style={style}>
            {children(onExportReady)}
            <div style={buttonsContainerStyle}>
                <div style={loadingStyle}>{exporting ? <span>Exporting...</span> : null}</div>
                <Button onClick={exportToCSV} disabled={exporting}>
                    Export CSV
                </Button>
                <Button onClick={exportToXLSX} disabled={exporting}>
                    Export XLSX
                </Button>
                <Button onClick={exportWithCustomName} disabled={exporting}>
                    Export with custom name CustomName
                </Button>
                <Button onClick={openExportDialog} disabled={exporting}>
                    Export using Export Dialog
                </Button>
            </div>
            {errorMessage ? <div style={errorStyle}>{errorMessage}</div> : null}
            {showExportDialog ? (
                <ExportDialog
                    headline="Export to XLSX"
                    cancelButtonText="Cancel"
                    submitButtonText="Export"
                    isPositive
                    className="s-dialog"
                    mergeHeaders
                    mergeHeadersDisabled={false}
                    mergeHeadersText="Keep attribute cells merged"
                    mergeHeadersTitle="CELLS"
                    onCancel={cancelExportDialog}
                    onSubmit={submitExportDialog}
                />
            ) : null}
        </div>
    );
};