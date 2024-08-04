# Windows 10/11 Single GPU Passthrough

Requirements
1. Your video card needs to support the UEFI. If it doesn't support, you can't do this.
2. Your operating system should be installed in UEFI mode.
3. Your processor needs to support virtualization.

1 - IOMMU Activation
We need to activate IOMMU technology to transfer devices from our main machine to the guest.
First of all, you need to activate IOMMU in the BIOS settings.
After  /etc/default/grubwe'll edit the file.
`GRUB_CMDLINE_LINUX_DEFAULT=` writing for AMD  `"amd_iommu=on iommu=pt"`For Intel  `intel_iommu=on iommu=pt'` we're adding the post.

For example, my setting file:
